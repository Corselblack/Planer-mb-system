# 🌙 MB SYSTEM 4D — Canais Dark Globais

**Sistema pessoal para gestão e produção de conteúdo para canais Dark/Faceless no YouTube.**

## Stack

- **Frontend + Backend:** Next.js 14+ (App Router) + TypeScript
- **Banco + Auth + Storage:** Supabase (PostgreSQL)
- **Estilização:** Tailwind CSS + shadcn/ui (dark theme)
- **TTS Principal:** Google Cloud TTS (free tier: 4M chars/mês)
- **TTS Complementar:** ElevenLabs (free: 20 min/mês)
- **YouTube:** YouTube Data API v3
- **Deploy:** Vercel

## Setup

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.example .env.local
# Preencher com suas keys

# 3. Rodar migration no Supabase
# Copiar conteúdo de supabase/migrations/00001_initial_schema.sql
# e executar no SQL Editor do Supabase

# 4. Iniciar desenvolvimento
npm run dev
```

## Estrutura

```
src/
├── app/          → Pages + API routes (Next.js App Router)
├── components/   → UI reutilizáveis
├── lib/          → Supabase, providers TTS, utils
supabase/
└── migrations/   → SQL migrations
docs/
├── CONTEXTO_DO_PROJETO.md  → Estado atual (ACPC-IA)
└── CHANGELOG.md            → Histórico de mudanças
```

## Framework

Construído com **ACPC-IA Framework v1.0** — Arquitetura de Continuidade e Persistência de Contexto para Projetos Assistidos por IA.

---

**Licença:** MIT | Marcelo Brasil | 2026
