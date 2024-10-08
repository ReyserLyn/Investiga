import {
  DegreesResponse,
  InstitutionsResponse,
  TypedPocketBase,
  UsersResponse,
} from "@/types/pocketbase-types";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import PocketBase from "pocketbase";

export class DatabaseClient {
  private static instance: DatabaseClient | null = null;
  private client: TypedPocketBase;

  private constructor() {
    const apiUrl = process.env.NEXT_PUBLIC_POCKETBASE_API_URL;

    if (!apiUrl) {
      throw new Error("[-] URL de la API de PocketBase no definida!");
    }

    this.client = new PocketBase(apiUrl) as TypedPocketBase;
    this.client.autoCancellation(false);
  }

  public static getInstance(): DatabaseClient {
    if (this.instance === null) {
      this.instance = new DatabaseClient();
    }
    return this.instance;
  }

  // Login
  public async loginWithPassword(email: string, password: string) {
    try {
      const result = await this.client
        .collection("users")
        .authWithPassword(email, password);
      if (!result?.token) {
        throw new Error("Error al obtener el token");
      }
      return result;
    } catch (err) {
      console.error(err);
      throw new Error("Correo o contraseña no válida");
    }
  }

  // Register
  public async register(
    username: string,
    email: string,
    password: string,
    passwordConfirm: string,
    name: string,
    lastname: string,
    phone: string,
    institution: string,
    degree: string
  ): Promise<UsersResponse> {
    const userData = {
      username,
      email,
      password,
      passwordConfirm,
      name,
      lastname,
      phone,
      institution,
      degree,
    };

    try {
      const result = await this.client.collection("users").create(userData);
      return result as UsersResponse;
    } catch (err) {
      console.error(err);
      throw new Error("Error al registrar el usuario");
    }
  }

  // Logout
  public async logout() {
    this.client.authStore.clear();
  }

  // Get Institutions
  public async getInstitutions(): Promise<InstitutionsResponse[]> {
    return this.fetchCollection<InstitutionsResponse>(
      "institutions",
      "Error al obtener las instituciones"
    );
  }

  // Get Degrees
  public async getDegrees(): Promise<DegreesResponse[]> {
    return this.fetchCollection<DegreesResponse>(
      "degrees",
      "Error al obtener los grados académicos"
    );
  }

  // Helper method to fetch collection data
  private async fetchCollection<T>(
    collectionName: string,
    errorMessage: string
  ): Promise<T[]> {
    try {
      const result = await this.client
        .collection(collectionName)
        .getFullList({ sort: "-name" });
      return result as T[];
    } catch (error) {
      console.error(error);
      throw new Error(errorMessage);
    }
  }

  async isAuthenticated(cookieStore: ReadonlyRequestCookies) {
    const cookie = cookieStore.get("pb_auth");
    if (!cookie) {
      return false;
    }

    this.client.authStore.loadFromCookie(cookie?.value || "");
    return this.client.authStore.isValid || false;
  }

  async getUser(cookieStore: ReadonlyRequestCookies) {
    const cookie = cookieStore.get("pb_auth");
    if (!cookie) {
      return false;
    }

    this.client.authStore.loadFromCookie(cookie?.value || "");
    await this.client.collection("users").authRefresh();
    return this.client.authStore.model;
  }

  getClient() {
    return this.client;
  }
}

const pbClient = DatabaseClient.getInstance();
export default pbClient;
