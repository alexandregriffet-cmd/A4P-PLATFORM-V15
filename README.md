# A4P Platform V15

V15 réunit :
- sécurité commerciale V13.2
- paiement Stripe V14
- modules CMP / PMP / PSYCHO
- dashboard club complet
- admin consolidé
- email automatique final

## Démarrage
1. Créer un projet Supabase
2. Exécuter `sql/schema_v15.sql`
3. Renseigner `.env.local` à partir de `.env.example`
4. Déployer sur Vercel
5. Configurer Stripe Checkout + Webhook
6. Configurer Resend pour les emails transactionnels

## Routes principales
- `/` portail A4P
- `/pricing`
- `/individuel/tests/cmp`
- `/individuel/tests/pmp`
- `/individuel/tests/psycho`
- `/club/dashboard`
- `/club/equipes`
- `/club/passations/create`
- `/club/results`
- `/admin`
- `/admin/access-codes`
- `/admin/entitlements`
- `/admin/consumption`
- `/admin/orders`

## Important
Cette V15 est une base codée et structurée, pensée pour être intégrée dans ton repo principal ou utilisée comme nouvelle base propre.
Il faudra brancher Stripe, Resend et Supabase pour obtenir la version production.
