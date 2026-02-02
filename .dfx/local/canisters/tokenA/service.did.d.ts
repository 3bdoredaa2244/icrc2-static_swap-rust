import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'approve' : ActorMethod<[Principal, bigint], boolean>,
  'balance_of' : ActorMethod<[Principal], bigint>,
  'transfer' : ActorMethod<[Principal, bigint], boolean>,
  'transfer_from' : ActorMethod<[Principal, Principal, bigint], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
