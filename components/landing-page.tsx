import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, GitBranch, Users, BarChart3, Mic, Eye, Shield, MessageSquare, Star, Check } from "lucide-react"
import { Header } from "@/components/header"

export function LandingPage() {
  const features = [
    {
      icon: Music,
      title: "Transcripción Automática",
      description: "OCR musical que convierte imágenes de partituras en editores visuales",
    },
    {
      icon: GitBranch,
      title: "Control de Versiones Musical",
      description: "Ramas, historial, forks y pull requests para tus composiciones",
    },
    {
      icon: Users,
      title: "Colaboración en Tiempo Real",
      description: "Edita partituras con otros músicos simultáneamente",
    },
    {
      icon: BarChart3,
      title: "Métricas Avanzadas",
      description: "Insights detallados de visualizaciones, descargas y colaboraciones",
    },
    {
      icon: Mic,
      title: "Integración de Audio",
      description: "Sube, reproduce y transcribe archivos de audio a partituras",
    },
    {
      icon: Eye,
      title: "Editor Visual",
      description: "Editor de partituras integrado como MuseScore en el navegador",
    },
    {
      icon: Shield,
      title: "Protección Blockchain",
      description: "Protege tus derechos de autor con tecnología blockchain",
    },
    {
      icon: MessageSquare,
      title: "Comunidad Musical",
      description: "Foros, tutoriales y eventos para músicos de todo el mundo",
    },
  ]

  const plans = [
    {
      name: "Free",
      price: "0",
      period: "/mes",
      features: [
        "5 repositorios públicos",
        "Editor básico de partituras",
        "Colaboración hasta 3 usuarios",
        "Exportar PDF/MIDI",
        "Comunidad básica",
      ],
    },
    {
      name: "Pro",
      price: "$5",
      period: "/mes",
      popular: true,
      features: [
        "Repositorios ilimitados",
        "OCR musical avanzado",
        "Colaboración ilimitada",
        "Integración con DAWs",
        "Métricas avanzadas",
        "Soporte prioritario",
      ],
    },
    {
      name: "Studio",
      price: "$10",
      period: "/mes",
      features: [
        "Todo de Pro +",
        "Protección blockchain",
        "API personalizada",
        "Almacenamiento ilimitado",
        "Gestión de equipos",
        "Consultoría musical",
      ],
    },
  ]

  const testimonials = [
    {
      name: "María González",
      role: "Compositora de Film Scoring",
      content:
        "MelodicHub revolucionó mi flujo de trabajo. Ahora puedo colaborar con músicos de todo el mundo en tiempo real.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Carlos Ruiz",
      role: "Director de Orquesta",
      content: "La función de OCR es increíble. Digitalicé toda mi biblioteca de partituras en cuestión de horas.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Ana Martín",
      role: "Profesora de Música",
      content:
        "Perfecto para enseñar composición. Mis estudiantes pueden ver el historial de cambios y aprender del proceso.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            El repositorio colaborativo para músicos y compositores
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crea, colabora y comparte proyectos musicales como nunca antes. El GitHub de la música donde tus
            composiciones cobran vida.
          </p>
          <div className="flex gap-4 justify-center"> {/* dashboard */}
            <Button size="lg" asChild>
              <Link href="/">Comienza Gratis</Link>
            </Button>
            <Button size="lg" variant="outline">
              Ver Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Interfaz Intuitiva y Poderosa</h2>
          <div className="bg-background rounded-lg shadow-2xl p-8">
            <img src="/interfazMelodic.png?height=400&width=800" alt="MelodicHub Dashboard" className="w-full rounded-lg" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Planes para Cada Músico</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Más Popular</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold">
                    {plan.price}
                    <span className="text-lg text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                    Comenzar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros usuarios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center"> {/* dashboard */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">¿Listo para revolucionar tu música?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Únete a miles de músicos que ya están creando el futuro de la música colaborativa.
          </p>
          <Button size="lg" asChild>
            <Link href="/">Comienza Gratis Ahora</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">MelodicHub</h3>
              <p className="text-sm text-muted-foreground">El futuro de la colaboración musical está aquí.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Comunidad</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Foros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Tutoriales
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 MelodicHub. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
