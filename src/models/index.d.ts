import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
}



type EagerDetailedUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DetailedUserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly location?: string | null;
  readonly birthdate?: string | null;
  readonly UserInfo?: UserInfo | null;
  readonly currentRole?: string | null;
  readonly industry?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly detailedUserInfoUserInfoId?: string | null;
}

type LazyDetailedUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DetailedUserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly location?: string | null;
  readonly birthdate?: string | null;
  readonly UserInfo: AsyncItem<UserInfo | undefined>;
  readonly currentRole?: string | null;
  readonly industry?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly detailedUserInfoUserInfoId?: string | null;
}

export declare type DetailedUserInfo = LazyLoading extends LazyLoadingDisabled ? EagerDetailedUserInfo : LazyDetailedUserInfo

export declare const DetailedUserInfo: (new (init: ModelInit<DetailedUserInfo>) => DetailedUserInfo) & {
  copyOf(source: DetailedUserInfo, mutator: (draft: MutableModel<DetailedUserInfo>) => MutableModel<DetailedUserInfo> | void): DetailedUserInfo;
}

type EagerUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserInfo = LazyLoading extends LazyLoadingDisabled ? EagerUserInfo : LazyUserInfo

export declare const UserInfo: (new (init: ModelInit<UserInfo>) => UserInfo) & {
  copyOf(source: UserInfo, mutator: (draft: MutableModel<UserInfo>) => MutableModel<UserInfo> | void): UserInfo;
}