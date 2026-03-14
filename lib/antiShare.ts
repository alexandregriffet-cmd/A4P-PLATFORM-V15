export function antiShareFingerprint(input:{ip?:string,userAgent?:string,sessionId?:string}) {
  return {
    fingerprint: [input.ip || 'na', input.userAgent || 'na', input.sessionId || 'na'].join('|')
  }
}
