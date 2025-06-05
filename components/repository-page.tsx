"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Music,
  Star,
  GitFork,
  Eye,
  Share2,
  Download,
  Play,
  MessageSquare,
  GitBranch,
  BarChart3,
  History,
  Settings,
  Users,
  FileText,
  Headphones,
  Edit,
  Code,
  Lock,
  AlertTriangle,
} from "lucide-react"
import { SheetMusicViewer } from "@/components/sheet-music-viewer"
import { ThemeToggle } from "@/components/theme-toggle"

interface RepositoryPageProps {
  owner: string
  name: string
}

export function RepositoryPage({ owner, name }: RepositoryPageProps) {
  const [activeTab, setActiveTab] = useState("sheet-music")
  const [selectedBranch, setSelectedBranch] = useState("main")

  const repoData = {
    name: "Sinfonía en Do Mayor",
    description: "Una composición orquestal inspirada en el estilo clásico de Beethoven, con elementos modernos.",
    owner: "María González",
    collaborators: 5,
    stars: 24,
    forks: 8,
    views: 156,
    isPrivate: false,
    language: "Classical",
    license: "Creative Commons",
    lastUpdate: "hace 2 horas",
    defaultBranch: "main",
  }

  const branches = [
    { name: "main", isDefault: true, isProtected: true },
    { name: "orquesta-completa", isDefault: false, isProtected: false },
    { name: "version-piano", isDefault: false, isProtected: false },
    { name: "arreglo-jazz", isDefault: false, isProtected: false },
  ]

  const files = [
    {
      name: "partitura-principal.musicxml",
      type: "musicxml",
      size: "45.2 KB",
      lastModified: "hace 2 horas",
      author: "María González",
    },
    {
      name: "audio-demo.mp3",
      type: "audio",
      size: "8.5 MB",
      lastModified: "hace 1 día",
      author: "Carlos Ruiz",
    },
    {
      name: "README.md",
      type: "markdown",
      size: "2.1 KB",
      lastModified: "hace 3 días",
      author: "María González",
    },
    {
      name: "notas-compositor.txt",
      type: "text",
      size: "1.8 KB",
      lastModified: "hace 1 semana",
      author: "Ana Martín",
    },
  ]

  const commits = [
    {
      message: "Añadir sección de desarrollo en el segundo movimiento",
      author: "María González",
      time: "hace 2 horas",
      hash: "a1b2c3d",
    },
    {
      message: "Corregir articulaciones en la sección de cuerdas",
      author: "Carlos Ruiz",
      time: "hace 1 día",
      hash: "e4f5g6h",
    },
    {
      message: "Añadir dinámicas en compases 45-60",
      author: "Ana Martín",
      time: "hace 2 días",
      hash: "i7j8k9l",
    },
  ]

  const issues = [
    {
      title: "Revisar tempo en el tercer movimiento",
      author: "Luis Fernández",
      time: "hace 3 horas",
      comments: 2,
      labels: ["enhancement"],
    },
    {
      title: "Falta indicación de pedal en compás 120",
      author: "Carmen Vega",
      time: "hace 1 día",
      comments: 1,
      labels: ["bug"],
    },
  ]

  const currentBranch = branches.find((b) => b.name === selectedBranch)
  const canEditDirectly = !currentBranch?.isProtected
  const isOwner = owner.toLowerCase() === "mariagonzalez" // Simular ownership

  const getFileIcon = (type: string) => {
    switch (type) {
      case "musicxml":
        return <Music className="w-4 h-4 text-blue-500" />
      case "audio":
        return <Headphones className="w-4 h-4 text-green-500" />
      case "markdown":
        return <FileText className="w-4 h-4 text-gray-500" />
      default:
        return <FileText className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
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
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {repoData.collaborators} colaboradores
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
        </div>
      </div>

      {/* Branch Selector and Edit Controls */}
      <div className="border-b bg-background">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4" />
                <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {branches.map((branch) => (
                      <SelectItem key={branch.name} value={branch.name}>
                        <div className="flex items-center gap-2">
                          <span>{branch.name}</span>
                          {branch.isDefault && (
                            <Badge variant="secondary" className="text-xs">
                              Principal
                            </Badge>
                          )}
                          {branch.isProtected && <Lock className="w-3 h-3" />}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="text-sm text-muted-foreground">
                {commits.length} commits • Última actualización {repoData.lastUpdate}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Edit Button - Main CTA */}
              {canEditDirectly && isOwner ? (
                <Button asChild>
                  <Link href={`/repo/${owner}/${name}/edit?branch=${selectedBranch}`}>
                    <Edit className="w-4 h-4 mr-2" />
                    Editar archivo
                  </Link>
                </Button>
              ) : (
                <div className="flex items-center gap-2">
                  {currentBranch?.isProtected && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Lock className="w-3 h-3" />
                      <span>Rama protegida</span>
                    </div>
                  )}
                  <Button variant="outline" asChild>
                    <Link href={`/repo/${owner}/${name}/edit?branch=${selectedBranch}&fork=true`}>
                      <GitFork className="w-4 h-4 mr-2" />
                      {isOwner ? "Crear rama" : "Fork y editar"}
                    </Link>
                  </Button>
                </div>
              )}

              <Button variant="outline" size="sm" asChild>
                <Link href={`/repo/${owner}/${name}/codespace?branch=${selectedBranch}`}>
                  <Code className="w-4 h-4 mr-2" />
                  Codespace
                </Link>
              </Button>
            </div>
          </div>

          {/* Protection Warning */}
          {currentBranch?.isProtected && (
            <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-yellow-800 dark:text-yellow-200">
                <AlertTriangle className="w-4 h-4" />
                <span>
                  La rama <code className="px-1 py-0.5 bg-yellow-100 dark:bg-yellow-800 rounded">{selectedBranch}</code>{" "}
                  está protegida.
                  {isOwner ? " Crea una nueva rama para hacer cambios." : " Haz un fork para proponer cambios."}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="sheet-music" className="flex items-center gap-2">
                  <Music className="w-4 h-4" />
                  Partitura
                </TabsTrigger>
                <TabsTrigger value="files" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Archivos
                </TabsTrigger>
                <TabsTrigger value="audio" className="flex items-center gap-2">
                  <Headphones className="w-4 h-4" />
                  Audio
                </TabsTrigger>
                <TabsTrigger value="collaboration" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Colaboración
                </TabsTrigger>
                <TabsTrigger value="insights" className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Insights
                </TabsTrigger>
                <TabsTrigger value="history" className="flex items-center gap-2">
                  <History className="w-4 h-4" />
                  Historial
                </TabsTrigger>
              </TabsList>

              <TabsContent value="sheet-music" className="mt-6">
                <SheetMusicViewer branch={selectedBranch} />
              </TabsContent>

              <TabsContent value="files" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Archivos del Repositorio</CardTitle>
                    <CardDescription>Rama: {selectedBranch}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-0">
                      {files.map((file, index) => (
                        <div key={index}>
                          <div className="flex items-center justify-between py-3">
                            <div className="flex items-center gap-3 flex-1">
                              {getFileIcon(file.type)}
                              <div className="flex-1">
                                <Link
                                  href={`/repo/${owner}/${name}/blob/${selectedBranch}/${file.name}`}
                                  className="font-medium text-primary hover:underline"
                                >
                                  {file.name}
                                </Link>
                                <div className="text-sm text-muted-foreground">
                                  {file.size} • Modificado {file.lastModified} por {file.author}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button size="sm" variant="ghost" asChild>
                                <Link href={`/repo/${owner}/${name}/edit/${file.name}?branch=${selectedBranch}`}>
                                  <Edit className="w-4 h-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                          {index < files.length - 1 && <Separator />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="audio" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Archivos de Audio</CardTitle>
                    <CardDescription>Grabaciones y demos de la composición</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <Play className="w-8 h-8 text-primary" />
                            <div>
                              <h4 className="font-medium">Grabación Completa - Orquesta</h4>
                              <p className="text-sm text-muted-foreground">12:34 • Subido hace 2 días</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            Reproducir
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <Play className="w-8 h-8 text-primary" />
                            <div>
                              <h4 className="font-medium">Demo Piano Solo</h4>
                              <p className="text-sm text-muted-foreground">8:45 • Subido hace 1 semana</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            Reproducir
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="collaboration" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Issues Abiertas</CardTitle>
                      <CardDescription>Problemas y sugerencias reportadas por la comunidad</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {issues.map((issue, index) => (
                          <div key={index} className="p-4 border rounded-lg">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-medium text-primary hover:underline cursor-pointer">{issue.title}</h4>
                              <div className="flex gap-1">
                                {issue.labels.map((label, labelIndex) => (
                                  <Badge key={labelIndex} variant="secondary" className="text-xs">
                                    {label}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>por {issue.author}</span>
                              <span>{issue.time}</span>
                              <div className="flex items-center gap-1">
                                <MessageSquare className="w-4 h-4" />
                                {issue.comments}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Pull Requests</CardTitle>
                      <CardDescription>Cambios propuestos por colaboradores</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8 text-muted-foreground">No hay pull requests abiertas</div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="insights" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Estadísticas de Visualización</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Visualizaciones totales</span>
                          <span className="font-bold">156</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Descargas</span>
                          <span className="font-bold">23</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Forks</span>
                          <span className="font-bold">8</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Estrellas</span>
                          <span className="font-bold">24</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Actividad Reciente</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-sm">
                          <div className="font-medium">+5 visualizaciones</div>
                          <div className="text-muted-foreground">en las últimas 24h</div>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium">+2 estrellas</div>
                          <div className="text-muted-foreground">esta semana</div>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium">+1 fork</div>
                          <div className="text-muted-foreground">este mes</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="history" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Historial de Commits</CardTitle>
                    <CardDescription>Cronología de cambios en la rama {selectedBranch}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {commits.map((commit, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback>
                              {commit.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-medium mb-1">{commit.message}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{commit.author}</span>
                              <span>{commit.time}</span>
                              <code className="px-2 py-1 bg-muted rounded text-xs">{commit.hash}</code>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            Ver cambios
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información del Proyecto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Propietario</h4>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback>MG</AvatarFallback>
                    </Avatar>
                    <Link href={`/profile/${owner}`} className="text-sm text-primary hover:underline">
                      {repoData.owner}
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Rama por defecto</h4>
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4" />
                    <span className="text-sm">{repoData.defaultBranch}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Licencia</h4>
                  <p className="text-sm text-muted-foreground">{repoData.license}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Última actualización</h4>
                  <p className="text-sm text-muted-foreground">{repoData.lastUpdate}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Colaboradores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Avatar key={i} className="w-8 h-8 border-2 border-background">
                      <AvatarFallback>U{i + 1}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  Ver todos
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar ZIP
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Exportar PDF
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Music className="w-4 h-4 mr-2" />
                  Exportar MIDI
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
