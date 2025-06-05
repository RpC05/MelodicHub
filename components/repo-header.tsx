"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Music,
  Star,
  GitFork,
  Eye,
  Share2,
  Download,
  Settings,
  GitBranch,
  AlertCircle,
  GitMerge,
  BarChart3,
  Code,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

interface RepoHeaderProps {
  owner: string
  name: string
  currentPage?: string
}

export function RepoHeader({ owner, name, currentPage }: RepoHeaderProps) {
  const repoData = {
    name: "Sinfonía en Do Mayor",
    description: "Una composición orquestal inspirada en el estilo clásico de Beethoven, con elementos modernos.",
    owner: "María González",
    stars: 24,
    forks: 8,
    views: 156,
    isPrivate: false,
    language: "Classical",
  }

  const navItems = [
    { key: "overview", label: "Resumen", icon: Music, href: `/repo/${owner}/${name}` },
    { key: "editor", label: "Editor", icon: Code, href: `/repo/${owner}/${name}/editor` },
    { key: "branches", label: "Ramas", icon: GitBranch, href: `/repo/${owner}/${name}/branches` },
    { key: "pulls", label: "Pull Requests", icon: GitMerge, href: `/repo/${owner}/${name}/pulls` },
    { key: "issues", label: "Issues", icon: AlertCircle, href: `/repo/${owner}/${name}/issues` },
    { key: "insights", label: "Insights", icon: BarChart3, href: `/repo/${owner}/${name}/insights` },
  ]

  return (
    <>
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
              <Music className="w-6 h-6 text-primary" />
              MelodicHub
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <nav className="flex items-center gap-2 text-sm">
              <Link href={`/profile/${owner}`} className="text-primary hover:underline">
                {owner}
              </Link>
              <span>/</span>
              <span className="font-semibold">{repoData.name}</span>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Repository Header */}
      <div className="border-b bg-muted/20">
        <div className="container py-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold">{repoData.name}</h1>
                {repoData.isPrivate && <Badge variant="secondary">Privado</Badge>}
                <Badge variant="outline">{repoData.language}</Badge>
              </div>
              <p className="text-muted-foreground mb-4">{repoData.description}</p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  {repoData.stars} estrellas
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" />
                  {repoData.forks} forks
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {repoData.views} visualizaciones
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Star className="w-4 h-4 mr-2" />
                Estrella
              </Button>
              <Button variant="outline" size="sm">
                <GitFork className="w-4 h-4 mr-2" />
                Fork
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
              <Button size="sm">
                <Download className="w-4 h-4 mr-2" />
                Descargar
              </Button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-6 border-b">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`flex items-center gap-2 py-3 px-1 border-b-2 transition-colors ${
                  currentPage === item.key
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
