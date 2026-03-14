export function consumeQuota(entitlement:any) {
  if (!entitlement || entitlement.remaining_uses <= 0) {
    return { ok:false, error:'Quota épuisé' }
  }
  return {
    ok:true,
    used_uses: (entitlement.used_uses || 0) + 1,
    remaining_uses: entitlement.remaining_uses - 1
  }
}
