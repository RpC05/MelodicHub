"use client"

import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Music,
  GitBranch,
  Users,
  Eye,
  Shield,
  Star,
  Check,
  Play,
  Zap,
  Globe,
  Award,
  TrendingUp,
  Heart,
  Sparkles,
  Camera,
  Download,
  Share2,
  Volume2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Header } from "@/components/header"

export function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [animatedStats, setAnimatedStats] = useState({
    users: 0,
    compositions: 0,
    collaborations: 0,
    hours: 0,
  })
  const [showCalendar, setShowCalendar] = useState(false)

  // Animación de estadísticas
  useEffect(() => {
    const targets = { users: 12500, compositions: 45000, collaborations: 8900, hours: 125000 }
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setAnimatedStats({
        users: Math.floor(targets.users * easeOut),
        compositions: Math.floor(targets.compositions * easeOut),
        collaborations: Math.floor(targets.collaborations * easeOut),
        hours: Math.floor(targets.hours * easeOut),
      })

      if (step >= steps) clearInterval(timer)
    }, stepTime)

    return () => clearInterval(timer)
  }, [])

  // Carrusel de testimonios
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const features = [
    {
      icon: Camera,
      title: "OCR Musical Avanzado",
      description: "Convierte cualquier partitura física en formato digital editable con IA",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Colaboración en Tiempo Real",
      description: "Edita partituras con músicos de todo el mundo simultáneamente",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: GitBranch,
      title: "Control de Versiones Musical",
      description: "Historial completo de cambios, ramas y fusiones como en GitHub",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Volume2,
      title: "Reproducción Inteligente",
      description: "Escucha tus composiciones con instrumentos virtuales realistas",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Globe,
      title: "Comunidad Global",
      description: "Conecta con compositores, intérpretes y productores mundialmente",
      gradient: "from-teal-500 to-blue-500",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Sube tu partitura",
      description: "Fotografía, escanea o sube directamente tu partitura",
      icon: Camera,
    },
    {
      number: "02",
      title: "IA la transcribe",
      description: "Nuestro OCR musical convierte la imagen en formato editable",
      icon: Sparkles,
    },
    {
      number: "03",
      title: "Edita y colabora",
      description: "Usa nuestro editor profesional y invita a otros músicos",
      icon: Users,
    },
    {
      number: "04",
      title: "Comparte al mundo",
      description: "Publica, exporta y distribuye tu música globalmente",
      icon: Share2,
    },
  ]

  const testimonials = [
    {
      name: "María González",
      role: "Compositora de Film Scoring",
      content:
        "MelodicHub revolucionó mi flujo de trabajo. La colaboración en tiempo real me permite trabajar con orquestas internacionales sin problemas.",
      avatar: "/maria.jpg?height=60&width=60",
      rating: 5,
      company: "Warner Bros Music",
    },
    {
      name: "Carlos Ruiz",
      role: "Director de Orquesta",
      content:
        "El OCR musical es increíblemente preciso. Digitalicé 200 años de partituras clásicas en semanas, no años.",
      avatar: "/carlos.jpg?height=60&width=60",
      rating: 5,
      company: "Orquesta Sinfónica Nacional",
    },
    {
      name: "Ana Martín",
      role: "Profesora de Composición",
      content: "Mis estudiantes aprenden más rápido viendo el historial de cambios. Es como tener un mentor 24/7.",
      avatar: "/ana.jpg?height=60&width=60",
      rating: 5,
      company: "Berklee College of Music",
    },
    {
      name: "Luis Fernández",
      role: "Productor Musical",
      content: "La integración con DAWs y la exportación automática a múltiples formatos me ahorra horas cada día.",
      avatar: "/luis.jpg?height=60&width=60",
      rating: 5,
      company: "Sony Music Entertainment",
    },
  ]

  const showcaseProjects = [
    {
      title: "Sinfonía Colaborativa Global",
      description: "50 músicos de 20 países creando una sinfonía",
      image: "/sinfonia.jpg?height=200&width=300",
      contributors: 50,
      genre: "Clásica",
      plays: "2.3M",
    },
    {
      title: "Jazz Fusion Experimental",
      description: "Fusión de jazz tradicional con elementos electrónicos",
      image: "/jazz.jpg?height=200&width=300",
      contributors: 12,
      genre: "Jazz",
      plays: "890K",
    },
    {
      title: "Banda Sonora Épica",
      description: "Música original para videojuegos AAA",
      image: "/bandaSonora.jpg?height=200&width=300",
      contributors: 25,
      genre: "Soundtrack",
      plays: "1.5M",
    },
  ]

  const stats = [
    { label: "Músicos Activos", value: animatedStats.users, suffix: "+" },
    { label: "Composiciones", value: animatedStats.compositions, suffix: "+" },
    { label: "Colaboraciones", value: animatedStats.collaborations, suffix: "+" },
    { label: "Horas de Música", value: animatedStats.hours, suffix: "+" },
  ]

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />

      {/* Hero Section con animaciones */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Fondo animado con notas musicales */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 animate-bounce delay-1000">
            <Music className="w-8 h-8 text-primary/20" />
          </div>
          <div className="absolute top-40 right-20 animate-pulse delay-2000">
            <Music className="w-6 h-6 text-primary/30" />
          </div>
          <div className="absolute bottom-40 left-1/4 animate-bounce delay-3000">
            <Music className="w-10 h-10 text-primary/15" />
          </div>
          <div className="absolute top-60 right-1/3 animate-pulse delay-500">
            <Music className="w-7 h-7 text-primary/25" />
          </div>

          {/* Gradiente de fondo */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              El futuro de la composición musical está aquí
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-up">
              Transcribe. Colabora.
              <br />
              <span className="text-5xl md:text-6xl">Crea Historia.</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
              La primera plataforma que combina IA y colaboración en tiempo real para que los músicos creen, editen, 
              compartan sus partituras de forma sencilla y segura.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
              >
                <Play className="w-5 h-5 mr-2" />
                Comenzar Gratis
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                <Eye className="w-5 h-5 mr-2" />
                Ver Demo Interactiva
              </Button>
            </div>
          </div>

          {/* Demo visual animado */}
          <div className="relative max-w-4xl mx-auto animate-fade-in-up delay-600">
            <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl border shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary/20 to-purple-600/20 p-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm font-medium">MelodicHub Studio</span>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Editor Profesional</h3>
                    <p className="text-muted-foreground mb-6">
                      Edita tus partituras con herramientas precisas de notación musical y colabora en tiempo real con otros músicos, todo en una plataforma integrada.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm">3 colaboradores editando</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm">Guardado automático activo</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-sm">IA sugiriendo armonías</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg">
                      <div className="space-y-2">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="h-1 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        ))}
                      </div>
                      <div className="mt-4 flex gap-2">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="w-6 h-8 bg-primary/20 rounded animate-pulse"
                            style={{ animationDelay: `${i * 200}ms` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    {/* Cursores colaborativos animados */}
                    <div className="absolute top-4 left-8 w-4 h-4 bg-green-500 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-8 right-12 w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona - Timeline animado */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cómo Funciona</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              De la idea a la obra maestra en 4 pasos simples
            </p>
          </div>

          <div className="relative">
            {/* Línea de tiempo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-purple-600 hidden md:block"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center mb-16 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${features[index % features.length].gradient} flex items-center justify-center`}
                        >
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-muted-foreground">{step.number}</div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Punto en la línea de tiempo */}
                <div className="hidden md:block w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas animadas */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-purple-600/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Características con gradientes */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Características Revolucionarias</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tecnología de vanguardia al servicio de tu creatividad musical
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-background to-muted/50"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos destacados */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre las creaciones más impresionantes de nuestra comunidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {showcaseProjects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="mb-2">{project.genre}</Badge>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.contributors}
                      </div>
                      <div className="flex items-center gap-1">
                        <Play className="w-4 h-4" />
                        {project.plays}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Escuchar Proyecto
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios con carrusel */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-purple-600/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Lo que dicen los profesionales</h2>
            <p className="text-xl text-muted-foreground">Músicos de todo el mundo confían en MelodicHub</p>
          </div>

          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-2xl font-medium mb-8 text-center">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  <div className="flex items-center justify-center gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={testimonials[currentTestimonial].avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {testimonials[currentTestimonial].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <div className="font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                      <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                      <div className="text-sm text-primary font-medium">{testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Controles del carrusel */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    role="button"
                    tabIndex={0}
                    aria-label={`Ir al testimonio ${index + 1}`}
                    onClick={() => setCurrentTestimonial(index)}
                    onKeyPress={e => {
                      if (e.key === "Enter" || e.key === " ") setCurrentTestimonial(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors cursor-pointer focus:ring-2 ring-primary 
      ${index === currentTestimonial ? "bg-primary" : "bg-muted"}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section con gradiente */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">¿Listo para crear el futuro de la música?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a más de 12,500 músicos que ya están revolucionando la industria musical
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Zap className="w-5 h-5 mr-2" />
              Comenzar Gratis Ahora
            </Button>

            {/* POPUP de agendar demo personalizada */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-white bg-transparent hover:bg-white hover:text-primary"
                >
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Agendar Demo Personalizada
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-4 bg-background text-foreground rounded-lg shadow-lg">
                <div className="flex flex-col items-center">
                  <p className="mb-4 text-center font-semibold">Selecciona una fecha para tu demo:</p>
                  <Calendar /* Agrega props aquí si los necesitas, como onSelect={fn} */ />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Check className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="font-semibold">Sin tarjeta de crédito</div>
            </div>
            <div>
              <Shield className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="font-semibold">Datos 100% seguros</div>
            </div>
            <div>
              <Heart className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="font-semibold">Soporte 24/7</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer creativo */}
      <footer className="bg-background border-t">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 font-bold text-2xl mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center">
                  <Music className="w-6 h-6 text-white" />
                </div>
                MelodicHub
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Revolucionando la creación musical con IA y colaboración global. El futuro de la música
                comienza aquí.
              </p>
              <div className="flex gap-4">
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  iOS App
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Android App
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Integraciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Seguridad
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Comunidad</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Foros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Tutoriales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Prensa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 MelodicHub. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-xs">
                <TrendingUp className="w-3 h-3 mr-1" />
                #1 en Innovación Musical
              </Badge> 
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-400 {
          animation-delay: 400ms;
        }
        
        .delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  )
}
