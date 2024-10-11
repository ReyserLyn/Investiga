import type PocketBase from "pocketbase";
import type { RecordService } from "pocketbase";

export enum Collections {
  Answers = "answers",
  Comments = "comments",
  Courses = "courses",
  Degrees = "degrees",
  Institutions = "institutions",
  Modules = "modules",
  Pucharses = "pucharses",
  Questions = "questions",
  Responses = "responses",
  Sessions = "sessions",
  Tags = "tags",
  Teachers = "teachers",
  ToolsIa = "tools_ia",
  Users = "users",
}

// Tipos de alias para una mejor usabilidad
export type IsoDateString = string;
export type RecordIdString = string;
export type HTMLString = string;

// Campos del sistema
export type BaseSystemFields<T = never> = {
  id: RecordIdString;
  created: IsoDateString;
  updated: IsoDateString;
  collectionId: string;
  collectionName: Collections;
  expand?: T;
};

export type AuthSystemFields<T = never> = {
  email: string;
  emailVisibility: boolean;
  username: string;
  verified: boolean;
} & BaseSystemFields<T>;

// Tipos de registros para cada colección
export type AnswersRecord = {
  body?: string;
  value?: number;
};

export type CommentsRecord = {
  course?: RecordIdString;
  message?: string;
  user?: RecordIdString;
};

export type CoursesRecord = {
  alumns?: RecordIdString[];
  description?: HTMLString;
  duration?: number;
  image?: string;
  isBest?: boolean;
  isFuture?: boolean;
  isTrending?: boolean;
  is_free?: boolean;
  is_live?: boolean;
  modules?: RecordIdString[];
  name?: string;
  presentation_video?: string;
  price?: number;
  shortDescription?: string;
  slug?: string;
  tags?: RecordIdString[];
  teacher?: RecordIdString;
};

export type DegreesRecord = {
  name: string;
};

export type InstitutionsRecord = {
  name: string;
};

export type ModulesRecord = {
  course?: RecordIdString;
  description?: string;
  duration?: number;
  sessions?: RecordIdString[];
  time?: IsoDateString;
  title?: string;
};

export enum PucharsesStatusOptions {
  "completado" = "completado",
  "pendiente" = "pendiente",
  "cancelado" = "cancelado",
}
export type PucharsesRecord = {
  course?: RecordIdString;
  fecha_de_compra?: IsoDateString;
  status?: PucharsesStatusOptions;
  user?: RecordIdString;
};

export type QuestionsRecord = {
  answers?: RecordIdString[];
  body?: string;
  description?: HTMLString;
};

export type ResponsesRecord = {
  answer?: RecordIdString;
  question?: RecordIdString;
  user?: RecordIdString;
};

export type SessionsRecord = {
  description?: string;
  duration?: number;
  poster?: string;
  title?: string;
  video?: string;
};

export type TagsRecord = {
  name?: string;
};

export type TeachersRecord = {
  description?: string;
  lastname: string;
  name: string;
  video_presentation?: string;
};

export type ToolsIaRecord = {
  description?: HTMLString;
  likes?: RecordIdString[];
  logo?: string;
  name?: string;
  page_url?: string;
  tags?: RecordIdString[];
  video_presentation?: string;
  expand?: {
    tags: TagsResponse[];
  };
};

export type UsersRecord = {
  avatar?: string;
  bio?: string;
  courses?: RecordIdString[];
  degree?: RecordIdString;
  institution?: RecordIdString;
  last_login?: IsoDateString;
  lastname?: string;
  name?: string;
  phone?: string;
};

// Los tipos de respuesta incluyen campos del sistema y coinciden con las respuestas de la API de PocketBase
export type AnswersResponse<Texpand = unknown> = Required<AnswersRecord> &
  BaseSystemFields<Texpand>;
export type CommentsResponse<Texpand = unknown> = Required<CommentsRecord> &
  BaseSystemFields<Texpand>;
export type CoursesResponse<Texpand = unknown> = Required<CoursesRecord> &
  BaseSystemFields<Texpand>;
export type DegreesResponse<Texpand = unknown> = Required<DegreesRecord> &
  BaseSystemFields<Texpand>;
export type InstitutionsResponse<Texpand = unknown> =
  Required<InstitutionsRecord> & BaseSystemFields<Texpand>;
export type ModulesResponse<Texpand = unknown> = Required<ModulesRecord> &
  BaseSystemFields<Texpand>;
export type PucharsesResponse<Texpand = unknown> = Required<PucharsesRecord> &
  BaseSystemFields<Texpand>;
export type QuestionsResponse<Texpand = unknown> = Required<QuestionsRecord> &
  BaseSystemFields<Texpand>;
export type ResponsesResponse<Texpand = unknown> = Required<ResponsesRecord> &
  BaseSystemFields<Texpand>;
export type SessionsResponse<Texpand = unknown> = Required<SessionsRecord> &
  BaseSystemFields<Texpand>;
export type TagsResponse<Texpand = unknown> = Required<TagsRecord> &
  BaseSystemFields<Texpand>;
export type TeachersResponse<Texpand = unknown> = Required<TeachersRecord> &
  BaseSystemFields<Texpand>;
export type ToolsIaResponse<Texpand = unknown> = Required<ToolsIaRecord> &
  BaseSystemFields<Texpand>;
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> &
  AuthSystemFields<Texpand>;

// Tipos que contienen todos los registros y respuestas, útiles para crear funciones auxiliares de tipificación
export type CollectionRecords = {
  answers: AnswersRecord;
  comments: CommentsRecord;
  courses: CoursesRecord;
  degrees: DegreesRecord;
  institutions: InstitutionsRecord;
  modules: ModulesRecord;
  pucharses: PucharsesRecord;
  questions: QuestionsRecord;
  responses: ResponsesRecord;
  sessions: SessionsRecord;
  tags: TagsRecord;
  teachers: TeachersRecord;
  tools_ia: ToolsIaRecord;
  users: UsersRecord;
};

export type CollectionResponses = {
  answers: AnswersResponse;
  comments: CommentsResponse;
  courses: CoursesResponse;
  degrees: DegreesResponse;
  institutions: InstitutionsResponse;
  modules: ModulesResponse;
  pucharses: PucharsesResponse;
  questions: QuestionsResponse;
  responses: ResponsesResponse;
  sessions: SessionsResponse;
  tags: TagsResponse;
  teachers: TeachersResponse;
  tools_ia: ToolsIaResponse;
  users: UsersResponse;
};

export type TypedPocketBase = PocketBase & {
  collection(idOrName: "answers"): RecordService<AnswersResponse>;
  collection(idOrName: "comments"): RecordService<CommentsResponse>;
  collection(idOrName: "courses"): RecordService<CoursesResponse>;
  collection(idOrName: "degrees"): RecordService<DegreesResponse>;
  collection(idOrName: "institutions"): RecordService<InstitutionsResponse>;
  collection(idOrName: "modules"): RecordService<ModulesResponse>;
  collection(idOrName: "pucharses"): RecordService<PucharsesResponse>;
  collection(idOrName: "questions"): RecordService<QuestionsResponse>;
  collection(idOrName: "responses"): RecordService<ResponsesResponse>;
  collection(idOrName: "sessions"): RecordService<SessionsResponse>;
  collection(idOrName: "tags"): RecordService<TagsResponse>;
  collection(idOrName: "teachers"): RecordService<TeachersResponse>;
  collection(idOrName: "tools_ia"): RecordService<ToolsIaResponse>;
  collection(idOrName: "users"): RecordService<UsersResponse>;
};
