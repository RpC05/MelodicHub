"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Music,
  Home,
  Share2,
  Users,
  Settings,
  HelpCircle,
  Plus,
  Search,
  Star,
  GitFork,
  Eye,
  Bell,
  TrendingUp,
  Clock,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("home")

  const repositories = [
    {
      name: "Sinfonía en Do Mayor",
      description: "Composición orquestal inspirada en Beethoven",
      language: "Classical",
      stars: 24,
      forks: 8,
      views: 156,
      updated: "hace 2 horas",
      isPrivate: false,
    },
    {
      name: "Jazz Quartet Arrangements",
      description: "Colección de arreglos para cuarteto de jazz",
      language: "Jazz",
      stars: 12,
      forks: 3,
      views: 89,
      updated: "hace 1 día",
      isPrivate: true,
    },
    {
      name: "Estudios para Piano",
      description: "Serie de estudios técnicos para piano avanzado",
      language: "Classical",
      stars: 31,
      forks: 15,
      views: 203,
      updated: "hace 3 días",
      isPrivate: false,
    },
  ]

  const recentActivity = [
    {
      type: "commit",
      user: "María González",
      action: "añadió nuevos compases a",
      repo: "Sinfonía en Do Mayor",
      time: "hace 1 hora",
    },
    {
      type: "fork",
      user: "Carlos Ruiz",
      action: "hizo fork de",
      repo: "Jazz Quartet Arrangements",
      time: "hace 3 horas",
    },
    {
      type: "star",
      user: "Ana Martín",
      action: "marcó con estrella",
      repo: "Estudios para Piano",
      time: "hace 5 horas",
    },
  ]

  const trending = [
    {
      name: "Misa Criolla Moderna",
      author: "Luis Fernández",
      stars: 89,
      language: "Folk",
    },
    {
      name: "Electronic Symphony",
      author: "DJ Composer",
      stars: 67,
      language: "Electronic",
    },
    {
      name: "Flamenco Fusion",
      author: "Carmen Vega",
      stars: 45,
      language: "Flamenco",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-muted/10 min-h-screen">
          <div className="p-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-8">
              <Music className="w-6 h-6 text-primary" />
              MelodicHub
            </Link>

            <nav className="space-y-2">
              <Button
                variant={activeTab === "home" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("home")}
              >
                <Home className="w-4 h-4 mr-2" />
                Inicio
              </Button>
              <Button
                variant={activeTab === "repos" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("repos")}
              >
                <Music className="w-4 h-4 mr-2" />
                Mi Música
              </Button>
              <Button
                variant={activeTab === "shared" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("shared")}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartidos
              </Button>
              <Button
                variant={activeTab === "community" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("community")}
              >
                <Users className="w-4 h-4 mr-2" />
                Comunidad
              </Button>

              <Separator className="my-4" />

              <Button variant="ghost" className="w-full justify-start">
                <Settings className="w-4 h-4 mr-2" />
                Ajustes
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <HelpCircle className="w-4 h-4 mr-2" />
                Ayuda
              </Button>
            </nav>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">Juan Pérez</div>
                <div className="text-xs text-muted-foreground">Compositor</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Header */}
          <header className="border-b p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Buscar partituras, repositorios, usuarios..." className="pl-10" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Nuevo Proyecto
                </Button>
                <Button variant="ghost" size="sm">
                  <Bell className="w-4 h-4" />
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="p-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Acciones Rápidas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <Button className="h-20 flex-col gap-2">
                        <Plus className="w-6 h-6" />
                        Nuevo Repositorio
                      </Button>
                      <Button variant="outline" className="h-20 flex-col gap-2">
                        <Music className="w-6 h-6" />
                        Subir Partitura
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Actividad Reciente
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback>
                              {activity.user
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="text-sm">
                              <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                              <Link href="#" className="text-primary hover:underline">
                                {activity.repo}
                              </Link>
                            </p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* My Repositories */}
                <Card>
                  <CardHeader>
                    <CardTitle>Mis Repositorios</CardTitle>
                    <CardDescription>Tus proyectos musicales más recientes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {repositories.map((repo, index) => (
                        <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Link
                                href={`/repo/juanperez/${repo.name.toLowerCase().replace(/\s+/g, "-")}`}
                                className="font-semibold text-primary hover:underline"
                              >
                                {repo.name}
                              </Link>
                              {repo.isPrivate && (
                                <Badge variant="secondary" className="text-xs">
                                  Privado
                                </Badge>
                              )}
                            </div>
                            <Badge variant="outline">{repo.language}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{repo.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4" />
                              {repo.stars}
                            </div>
                            <div className="flex items-center gap-1">
                              <GitFork className="w-4 h-4" />
                              {repo.forks}
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {repo.views}
                            </div>
                            <span>Actualizado {repo.updated}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Column */}
              <div className="space-y-6">
                {/* Trending */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Tendencias
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {trending.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <Link href="#" className="text-sm font-medium text-primary hover:underline block truncate">
                              {item.name}
                            </Link>
                            <p className="text-xs text-muted-foreground">por {item.author}</p>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Star className="w-3 h-3" />
                            {item.stars}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Community Highlights */}
                <Card>
                  <CardHeader>
                    <CardTitle>Destacados de la Comunidad</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-muted/50">
                        <h4 className="text-sm font-medium mb-1">Concurso de Composición</h4>
                        <p className="text-xs text-muted-foreground">Participa en nuestro concurso mensual</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/50">
                        <h4 className="text-sm font-medium mb-1">Masterclass Online</h4>
                        <p className="text-xs text-muted-foreground">Armonía moderna - Próximo viernes</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/50">
                        <h4 className="text-sm font-medium mb-1">Nueva Función</h4>
                        <p className="text-xs text-muted-foreground">OCR mejorado ya disponible</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
