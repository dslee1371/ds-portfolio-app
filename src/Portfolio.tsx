import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Rocket,
  Server,
  Boxes,
  Cloud,
  Cpu,
  ShieldCheck,
  Clock,
  FolderKanban,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { ThemeToggle } from "@/components/ThemeToggle";

import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";



// ---------------------------
// Portfolio — Single File
// ---------------------------

type Project = {
  title: string;
  desc: string;
  tags: string[];
  href?: string;
};

type Experience = {
  period: string;
  role: string;
  org: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Binance 자동 매매 시스템",
    desc: "Python · FastAPI · MySQL · Futures API · 리스크 관리 · K8s 운영",
    tags: ["Python", "Binance", "MySQL", "Kubernetes", "Prometheus"],
    href: "#",
  },
  {
    title: "네이버 부동산 스크래퍼",
    desc: "Streamlit 대시보드 · 크롤러 · Prometheus 메트릭 · 자동 배포",
    tags: ["Streamlit", "GitOps", "Grafana", "Docker"],
    href: "#",
  },
  {
    title: "KCB DR 환경 구축",
    desc: "AWS 다계정(EKS/EC2) · Argo CD · Helm 차트 · CI/CD 파이프라인",
    tags: ["AWS", "EKS", "Argo CD", "Helm"],
    href: "#",
  },
];

const SKILLS = [
  "Kubernetes", "Helm", "Kustomize", "Argo CD", "Jenkins", "GitHub Actions",
  "Terraform", "Ansible", "Docker", "Nginx", "Prometheus/Grafana",
  "AWS", "GCP", "MySQL", "Python", "Streamlit"
];

const STATS = [
  {
    label: "운영 경험",
    value: "10+년",
    desc: "엔터프라이즈 & 금융권 프로젝트",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    label: "주요 프로젝트",
    value: "35건",
    desc: "대규모 인프라 구축 및 마이그레이션",
    icon: <FolderKanban className="h-5 w-5" />,
  },
  {
    label: "안정성 지표",
    value: "99.95%",
    desc: "SLA 달성률 & 보안 감사 통과",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const EXPERIENCES: Experience[] = [
  {
    period: "2023 — 2024",
    role: "DevOps 리드 엔지니어",
    org: "삼성전자 RCS DDO",
    summary: "클라우드 네이티브 전환과 배포 자동화 체계를 총괄",
    highlights: [
      "EKS 기반 멀티존 아키텍처와 GitOps 파이프라인 구축",
      "Terraform · Argo CD로 IaC 및 배포 자동화 도입",
    ],
    stack: ["AWS", "EKS", "Terraform", "Argo CD", "GitOps"],
  },
  {
    period: "2022 — 2023",
    role: "SRE/DevOps 컨설턴트",
    org: "KB국민카드 MSP",
    summary: "금융권 Kubernetes 운영 안정화 및 관제 고도화",
    highlights: [
      "GitLab CI · Argo Rollouts 기반 점진적 배포 설계",
      "Prometheus/Grafana, Loki 스택으로 모니터링 표준화",
    ],
    stack: ["Kubernetes", "GitLab CI", "Argo Rollouts", "Prometheus", "Grafana"],
  },
  {
    period: "2019 — 2022",
    role: "플랫폼 엔지니어",
    org: "다수 공공·금융 인프라",
    summary: "보안·네트워크를 포함한 통합 운영 플랫폼 구축",
    highlights: [
      "AD/보안 인프라 프로젝트 PL/PM, 재해복구 시나리오 수립",
      "자동화 스크립트와 파이프라인으로 운영 표준화",
    ],
    stack: ["Ansible", "Python", "VMware", "Security", "DR"],
  },
];

// 모든 프로젝트의 태그를 수집해서 정렬
const ALL_TAGS = Array.from(
  new Set(PROJECTS.flatMap((p) => p.tags))
).sort();

export default function Portfolio() {
  // Portfolio() 내부, return 위쪽에 추가
  const [query, setQuery] = React.useState("");
  const [activeTags, setActiveTags] = React.useState<Set<string>>(new Set());

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));

      const matchesTags =
        activeTags.size === 0 ||
        Array.from(activeTags).every((t) => p.tags.includes(t)); // AND 조건

      return matchesQuery && matchesTags;
    });
  }, [query, activeTags]);
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-[-18%] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/40 via-sky-500/40 to-purple-500/40 blur-[120px]"
          animate={{
            rotate: [0, 12, -8, 0],
            scale: [1, 1.05, 0.98, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-22%] left-[10%] h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-sky-400/40 via-cyan-400/30 to-emerald-400/30 blur-[140px]"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, 20, -10, 0],
            scale: [1, 0.95, 1.02, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-14%] top-1/3 h-[30rem] w-[30rem] rounded-full bg-gradient-to-bl from-fuchsia-500/40 via-purple-500/30 to-primary/30 blur-[140px]"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, -15, 12, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-sky-500/20 to-purple-500/30 text-primary">
              <Rocket className="h-4 w-4" />
            </span>
            <span>이동수 · DevOps & Cloud</span>
          </div>
          <nav className="hidden items-center gap-2 text-sm md:flex">
            {[
              { href: "#about", label: "소개" },
              { href: "#projects", label: "프로젝트" },
              { href: "#skills", label: "기술스택" },
              { href: "#contact", label: "연락" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative inline-flex items-center gap-1 rounded-full px-3 py-1 transition hover:text-primary"
              >
                <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-sky-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative">{item.label}</span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <IconLink href="mailto:dslee1371@gmail.com" label="email"><Mail className="h-5 w-5" /></IconLink>
            <IconLink href="https://github.com/dslee1371" label="github" newTab><Github className="h-5 w-5" /></IconLink>
            <IconLink href="#" label="linkedin" newTab><Linkedin className="h-5 w-5" /></IconLink>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className="mb-4 rounded-xl border-0 bg-gradient-to-r from-sky-500/90 via-primary/90 to-purple-500/90 text-primary-foreground shadow"
            >
              SRE · DevOps · Cloud
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              안녕하세요, <span className="text-primary">이동수</span>입니다.
            </h1>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Python과 CI/CD, Kubernetes, AWS/GCP 인프라를 기반으로
              안정적인 시스템을 설계·자동화하는 DevOps/클라우드 엔지니어입니다.
              복잡한 환경을 단순화하고 운영을 코드로 관리합니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl bg-gradient-to-r from-primary via-purple-600 to-sky-500 text-primary-foreground shadow-lg shadow-primary/20 transition hover:scale-[1.02]">
                <a href="#contact"><Mail className="mr-2 h-4 w-4" />프로젝트 문의</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl border-primary/40 text-primary hover:bg-primary/10">
                <a href="#resume">이력서 보기</a>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-border/80 bg-background/70 p-4 shadow-lg backdrop-blur"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-32 bg-gradient-to-t from-purple-500/40 via-transparent to-transparent blur-3xl" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                    <span className="text-primary">{stat.icon}</span>
                  </div>
                  <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground leading-snug">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <Card className="relative overflow-hidden rounded-3xl border-0 bg-background/80 shadow-2xl">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-sky-500/20" />
              <div className="pointer-events-none absolute -inset-24 -z-10 rounded-full bg-gradient-to-r from-primary/30 via-purple-500/20 to-cyan-400/20 blur-[180px]" />
              <CardContent className="relative p-6 md:p-8">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Core Focus</p>
                <h2 className="mt-2 text-2xl font-semibold leading-tight">안정성과 속도를 동시에 잡는 운영 전략</h2>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <Feature icon={<Server className="h-5 w-5" />} title="인프라" desc="EKS/RKE2 설계·운영" />
                  <Feature icon={<Boxes className="h-5 w-5" />} title="클러스터" desc="모니터링·로깅" />
                  <Feature icon={<Cloud className="h-5 w-5" />} title="클라우드" desc="AWS·GCP·VPC" />
                  <Feature icon={<Cpu className="h-5 w-5" />} title="자동화" desc="IaC·CI/CD" />
                  <Feature icon={<Rocket className="h-5 w-5" />} title="딜리버리" desc="GitOps·배포" />
                  <Feature icon={<Github className="h-5 w-5" />} title="개발" desc="Python·API" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold">소개</h2>
            <p className="mt-2 text-muted-foreground">Who I am</p>
          </div>
          <div className="md:col-span-2 space-y-4 leading-relaxed">
            <p>
              대기업 및 금융권 프로젝트에서 Kubernetes 기반 운영과 CI/CD, IaC, 모니터링 체계를 구축했습니다.
              네트워크·보안·배포 파이프라인을 통합 설계하여 복잡한 이슈를 빠르게 안정화합니다.
            </p>
            <p className="text-sm text-muted-foreground">
              대표 경험: 삼성전자 RCS DDO(2023–2024, EKS·Terraform·Argo),
              KB국민카드 MSP(2022–2023, EKS·GitLab CI/CD), 다수의 AD·보안 인프라 프로젝트 PL/PM 수행.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {SKILLS.slice(0, 8).map((skill) => (
                <div key={skill} className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/80 px-4 py-3 shadow-sm">
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary/50 via-sky-500/50 to-purple-500/50" />
                  <p className="text-sm font-medium">{skill}</p>
                  <p className="text-xs text-muted-foreground">핵심 역량</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-[280px_1fr]">
          <div>
            <h2 className="text-2xl font-bold">경력 하이라이트</h2>
            <p className="mt-2 text-muted-foreground text-sm">
              팀 빌딩부터 배포 자동화, 가시성 확보까지 엔드투엔드로 리드한 프로젝트들을 요약했습니다.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-primary/60 via-purple-500/40 to-sky-500/60 md:block" />
            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="relative md:pl-12"
                >
                  <span className="absolute left-0 hidden h-3 w-3 -translate-x-[5px] rounded-full bg-gradient-to-br from-primary via-purple-500 to-sky-500 shadow-[0_0_15px_rgba(99,102,241,0.4)] md:block" />
                  <Card className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/90 shadow-xl">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_55%)]" />
                    <CardHeader className="pb-3">
                      <CardDescription className="text-xs uppercase tracking-wider text-muted-foreground">
                        {exp.period}
                      </CardDescription>
                      <CardTitle className="text-xl leading-tight">{exp.role}</CardTitle>
                      <p className="text-sm text-muted-foreground">{exp.org}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm leading-relaxed text-muted-foreground">{exp.summary}</p>
                      <ul className="space-y-2 text-sm">
                        {exp.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary via-purple-500 to-sky-500" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.stack.map((item) => (
                          <Badge key={item} variant="secondary" className="rounded-xl">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">선정 프로젝트</h2>

        {/* 검색 + 필터 바 */}
        <div className="mb-4 flex flex-col gap-3">
          {/* 검색창 */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="프로젝트 검색 (제목/설명/태그)"
              className="pl-9"
              value={query}
              // onChange={(e) => setQuery(e.target.value)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            />
            {query && (
              <button
                type="button"
                aria-label="검색어 지우기"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                onClick={() => setQuery("")}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* 태그 필터 칩들 */}
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map((tag) => {
              const on = activeTags.has(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  aria-pressed={on}
                  onClick={() => {
                    const next = new Set(activeTags);
                    on ? next.delete(tag) : next.add(tag);
                    setActiveTags(next);
                  }}
                  className={[
                    "rounded-xl border px-3 py-1 text-sm transition",
                    on
                      ? "bg-primary text-primary-foreground border-primary"
                      : "hover:bg-muted"
                  ].join(" ")}
                >
                  {tag}
                </button>
              );
            })}

            {/* 필터 초기화 */}
            {!!activeTags.size && (
              <button
                type="button"
                onClick={() => setActiveTags(new Set())}
                className="rounded-xl border px-3 py-1 text-sm hover:bg-muted"
              >
                초기화
              </button>
            )}
          </div>

          {/* 결과 요약 */}
          <div className="text-sm text-muted-foreground">
            {filtered.length}개 결과
            {query && <> · “{query}”</>}
            {!!activeTags.size && (
              <>
                {" "}
                · 태그: {Array.from(activeTags).join(", ")}
              </>
            )}
          </div>
        </div>

        {/* 결과 카드 그리드 */}
        {filtered.length ? (
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <Card
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background/80 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-sky-500/10 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg transition-colors group-hover:text-primary">{p.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-muted-foreground">{p.desc}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-xl border-0 bg-gradient-to-r from-primary/15 via-purple-500/15 to-sky-500/15 text-foreground">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <Button asChild variant="ghost" size="sm" className="rounded-xl">
                      <a href={p.href ?? "#"} target="_blank" rel="noreferrer">
                        자세히 보기
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="rounded-2xl">
            <CardContent className="py-10 text-center text-muted-foreground">
              검색 조건에 맞는 프로젝트가 없어요.
            </CardContent>
          </Card>
        )}
      </section>


      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">기술 스택</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {SKILLS.map((s) => (
            <div
              key={s}
              className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
            >
              <span className="font-medium">{s}</span>
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary via-purple-500 to-sky-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <Card className="relative overflow-hidden rounded-3xl border-0 bg-background/90 shadow-2xl">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-purple-500/10 to-sky-500/10" />
          <motion.div
            className="pointer-events-none absolute -right-12 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/30 via-purple-500/20 to-sky-500/30 blur-3xl sm:block"
            animate={{
              scale: [1, 1.05, 0.95, 1],
              rotate: [0, -8, 6, 0],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <CardHeader>
            <Badge variant="outline" className="w-fit rounded-xl">Let's talk</Badge>
            <CardTitle className="text-3xl">프로젝트 문의</CardTitle>
            <CardDescription className="max-w-2xl text-base text-muted-foreground">
              간단한 요구사항만 공유해주셔도 좋아요. 목표와 우선순위를 명확히 정리해
              실행 전략을 제안드립니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl bg-gradient-to-r from-primary via-sky-500 to-purple-500 text-primary-foreground shadow-lg shadow-primary/20 transition hover:scale-[1.02]">
                <a href="mailto:dslee1371@gmail.com"><Mail className="mr-2 h-4 w-4" />이메일 보내기</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl border-primary/40 text-primary hover:bg-primary/10">
                <a href="https://github.com/dslee1371" target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" />GitHub</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl border-primary/40 text-primary hover:bg-primary/10">
                <a href="#" target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4" />LinkedIn</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer id="resume" className="mt-12 border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} 이동수. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="rounded-xl" asChild>
                <a href="#">PDF 이력서</a>
              </Button>
              <Button variant="outline" size="sm" className="rounded-xl" asChild>
                <a href="http://gitea.apps.lab3.dslee.lab/bn_user/simple" target="_blank" rel="noreferrer">Gitea</a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ---------------------------
// Small Components
// ---------------------------

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="group relative flex items-start gap-3 overflow-hidden rounded-2xl border border-border/70 bg-background/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-sky-500/10 to-purple-500/10 opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="mt-1 text-primary drop-shadow">{icon}</div>
      <div>
        <p className="font-medium leading-tight">{title}</p>
        <p className="text-sm text-muted-foreground leading-snug">{desc}</p>
      </div>
    </div>
  );
}

function IconLink({
  href,
  label,
  children,
  newTab,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  newTab?: boolean;
}) {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="rounded-xl transition hover:bg-gradient-to-br hover:from-primary/15 hover:via-sky-500/15 hover:to-purple-500/20 hover:text-primary"
      aria-label={label}
    >
      <a href={href} {...(newTab ? { target: "_blank", rel: "noreferrer" } : {})}>
        {children}
      </a>
    </Button>
  );
}
