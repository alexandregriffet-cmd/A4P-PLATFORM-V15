export function issueEntitlement({ ownerType, ownerId, uses, moduleScope }:{
  ownerType:string, ownerId:string, uses:number, moduleScope:string
}) {
  return {
    ownerType,
    ownerId,
    purchased_uses: uses,
    remaining_uses: uses,
    module_scope: moduleScope,
    status: 'active'
  }
}
