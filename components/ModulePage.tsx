'use client'
import { useState } from 'react'

type Props = {
  moduleName: 'CMP' | 'PMP' | 'PSYCHO'
  endpoint: string
}

export default function ModulePage({ moduleName, endpoint }: Props) {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const questions = Array.from({length: 8}, (_, i) => ({
    id: `q${i+1}`,
    text: `${moduleName} — Question ${i+1}`
  }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ firstname, lastname, email, answers, source:'individual' })
      })
      const data = await res.json()
      setResult(data.result ?? data)
    } catch (e) {
      setResult({ error: 'Erreur réseau / serveur' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{display:'grid', gridTemplateColumns:'2fr 1fr', gap:24}}>
      <form onSubmit={handleSubmit} style={{display:'grid', gap:16}}>
        <div style={{background:'#fff', padding:18, borderRadius:14}}>
          <h2>{moduleName} individuel</h2>
          <input placeholder="Prénom" value={firstname} onChange={e=>setFirstname(e.target.value)} required style={{display:'block', width:'100%', marginBottom:12, padding:12}} />
          <input placeholder="Nom" value={lastname} onChange={e=>setLastname(e.target.value)} required style={{display:'block', width:'100%', marginBottom:12, padding:12}} />
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required style={{display:'block', width:'100%', padding:12}} />
        </div>
        <div style={{background:'#fff', padding:18, borderRadius:14}}>
          {questions.map(q => (
            <div key={q.id} style={{marginBottom:16}}>
              <p>{q.text}</p>
              {[1,2,3,4,5].map(n => (
                <label key={n} style={{marginRight:12}}>
                  <input type="radio" name={q.id} onChange={()=>setAnswers(prev=>({...prev,[q.id]:n}))} required /> {n}
                </label>
              ))}
            </div>
          ))}
          <button type="submit" disabled={loading} style={{padding:'12px 16px', background:'#17365D', color:'#fff', borderRadius:10}}>
            {loading ? 'Envoi...' : `Valider le ${moduleName}`}
          </button>
        </div>
      </form>
      <aside style={{background:'#fff', padding:18, borderRadius:14}}>
        <h2>Résultat</h2>
        {!result ? <p>Le résultat s’affichera ici.</p> : <pre style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(result, null, 2)}</pre>}
      </aside>
    </div>
  )
}
