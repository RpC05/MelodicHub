"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Upload,
  Download,
  Play,
  Pause,
  Save,
  Undo,
  Redo,
  ZoomIn,
  ZoomOut,
  FileText,
  Music,
  Camera,
  Wand2,
  Volume2,
  SkipBack,
  SkipForward,
  Square,
  Settings,
  Type,
  MousePointer,
  Scissors,
  Copy,
  ClipboardPasteIcon as Paste,
  Grid,
  Palette,
} from "lucide-react"

export function SheetMusicEditor() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showOCRDemo, setShowOCRDemo] = useState(false)
  const [selectedTool, setSelectedTool] = useState("select")
  const [zoom, setZoom] = useState([100])
  const [selectedInstrument, setSelectedInstrument] = useState("piano")
  const [tempo, setTempo] = useState([120])
  const [volume, setVolume] = useState([80])

  const handleOCRUpload = () => {
    setShowOCRDemo(true)
    setTimeout(() => {
      setShowOCRDemo(false)
    }, 3000)
  }

  const tools = [
    { id: "select", icon: MousePointer, label: "Seleccionar" },
    { id: "note", icon: Music, label: "Notas" },
    { id: "rest", icon: Square, label: "Silencios" },
    { id: "text", icon: Type, label: "Texto" },
    { id: "dynamics", icon: Wand2, label: "Dinámicas" },
    { id: "articulation", icon: Palette, label: "Articulaciones" },
    { id: "measure", icon: Grid, label: "Compases" },
    { id: "clef", icon: Music, label: "Claves" },
  ]

  const noteValues = ["whole", "half", "quarter", "eighth", "sixteenth", "thirty-second"]
  const dynamics = ["pp", "p", "mp", "mf", "f", "ff", "fff"]
  const articulations = ["staccato", "legato", "accent", "tenuto", "fermata"]

  return (
    <div className="space-y-4">
      {/* Main Toolbar */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Music className="w-5 h-5" />
              Editor Profesional de Partituras
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Guardado automático</Badge>
              <Badge variant="outline">2 colaboradores en línea</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Primary Toolbar */}
          <div className="flex items-center justify-between">
            {/* File Operations */}
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline">
                <Save className="w-4 h-4 mr-1" />
                Guardar
              </Button>
              <Button size="sm" variant="outline">
                <Undo className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Redo className="w-4 h-4" />
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <Button size="sm" variant="outline">
                <Copy className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Paste className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Scissors className="w-4 h-4" />
              </Button>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-3">
              <Button size="sm" variant="outline">
                <SkipBack className="w-4 h-4" />
              </Button>
              <Button size="sm" onClick={() => setIsPlaying(!isPlaying)} className="px-4">
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <Button size="sm" variant="outline">
                <SkipForward className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Square className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <span>Tempo:</span>
                <div className="w-20">
                  <Slider value={tempo} onValueChange={setTempo} max={200} min={60} step={1} className="w-full" />
                </div>
                <span className="w-8 text-center">{tempo[0]}</span>
              </div>
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" onClick={() => setZoom([Math.max(25, zoom[0] - 25)])}>
                <ZoomOut className="w-4 h-4" />
              </Button>
              <span className="text-sm w-12 text-center">{zoom[0]}%</span>
              <Button size="sm" variant="outline" onClick={() => setZoom([Math.min(400, zoom[0] + 25)])}>
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <Button size="sm" variant="outline">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Tools Toolbar */}
          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-1">
              {tools.map((tool) => (
                <Button
                  key={tool.id}
                  size="sm"
                  variant={selectedTool === tool.id ? "default" : "ghost"}
                  onClick={() => setSelectedTool(tool.id)}
                  className="flex-col h-12 w-12 p-1"
                >
                  <tool.icon className="w-4 h-4" />
                  <span className="text-xs">{tool.label}</span>
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Note Values */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Figuras:</span>
                <div className="flex gap-1">
                  {noteValues.map((note, index) => (
                    <Button key={note} size="sm" variant="outline" className="w-8 h-8 p-0">
                      <span className="text-lg">
                        {index === 0
                          ? "𝅝"
                          : index === 1
                            ? "𝅗𝅥"
                            : index === 2
                              ? "♩"
                              : index === 3
                                ? "♪"
                                : index === 4
                                  ? "𝅘𝅥𝅯"
                                  : "𝅘𝅥𝅰"}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Accidentals */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Alteraciones:</span>
                <div className="flex gap-1">
                  <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                    ♭
                  </Button>
                  <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                    ♮
                  </Button>
                  <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                    ♯
                  </Button>
                </div>
              </div>

              {/* Instrument Selection */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Instrumento:</span>
                <Select value={selectedInstrument} onValueChange={setSelectedInstrument}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="piano">Piano</SelectItem>
                    <SelectItem value="violin">Violín</SelectItem>
                    <SelectItem value="flute">Flauta</SelectItem>
                    <SelectItem value="trumpet">Trompeta</SelectItem>
                    <SelectItem value="cello">Violonchelo</SelectItem>
                    <SelectItem value="guitar">Guitarra</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sheet Music Canvas */}
      <Card className="min-h-[700px]">
        <CardContent className="p-0">
          <div
            className="bg-white dark:bg-gray-50 min-h-[700px] relative overflow-auto"
            style={{ zoom: `${zoom[0]}%` }}
          >
            {/* Page Header */}
            <div className="text-center py-8 px-8">
              <h1 className="text-3xl font-bold mb-2">Sinfonía en Do Mayor</h1>
              <h2 className="text-xl mb-1">I. Allegro con brio</h2>
              <p className="text-sm text-gray-600">María González</p>
            </div>

            {/* Musical Score */}
            <div className="px-8 pb-8 space-y-8">
              {/* System 1 */}
              <div className="relative">
                {/* Treble Clef Staff */}
                <div className="relative h-24 mb-4">
                  {/* Staff Lines */}
                  {[0, 1, 2, 3, 4].map((line) => (
                    <div key={line} className="absolute w-full h-px bg-black" style={{ top: `${16 + line * 16}px` }} />
                  ))}

                  {/* Treble Clef */}
                  <div className="absolute left-4 top-2 text-4xl font-bold">𝄞</div>

                  {/* Key Signature (C Major - no sharps/flats) */}
                  <div className="absolute left-16 top-4 text-2xl">{/* C Major has no key signature */}</div>

                  {/* Time Signature */}
                  <div className="absolute left-20 top-3 text-xl font-bold">
                    <div>4</div>
                    <div>4</div>
                  </div>

                  {/* Measures with Notes */}
                  <div className="absolute left-32 top-0 w-full h-full">
                    {/* Measure 1 */}
                    <div className="absolute left-0 top-0 w-32 h-full border-r border-black">
                      {/* Notes: C-E-G-C (C major chord) */}
                      <div className="absolute left-4 top-8 text-xl">♩</div>
                      <div className="absolute left-12 top-4 text-xl">♩</div>
                      <div className="absolute left-20 top-6 text-xl">♩</div>
                      <div className="absolute left-28 top-2 text-xl">♩</div>
                      {/* Measure number */}
                      <div className="absolute -top-6 left-2 text-xs text-gray-600">1</div>
                    </div>

                    {/* Measure 2 */}
                    <div className="absolute left-32 top-0 w-32 h-full border-r border-black">
                      {/* Half notes */}
                      <div className="absolute left-4 top-6 text-xl">𝅗𝅥</div>
                      <div className="absolute left-20 top-4 text-xl">𝅗𝅥</div>
                      {/* Dynamic marking */}
                      <div className="absolute left-4 top-20 text-sm font-bold italic">mf</div>
                      <div className="absolute -top-6 left-2 text-xs text-gray-600">2</div>
                    </div>

                    {/* Measure 3 */}
                    <div className="absolute left-64 top-0 w-32 h-full border-r border-black">
                      {/* Eighth notes with beam */}
                      <div className="absolute left-2 top-5 text-lg">♪</div>
                      <div className="absolute left-6 top-7 text-lg">♪</div>
                      <div className="absolute left-10 top-5 text-lg">♪</div>
                      <div className="absolute left-14 top-3 text-lg">♪</div>
                      {/* Beam line */}
                      <div className="absolute left-2 top-4 w-12 h-px bg-black"></div>
                      {/* Quarter rest */}
                      <div className="absolute left-20 top-6 text-lg">𝄽</div>
                      {/* Staccato dots */}
                      <div className="absolute left-3 top-12 w-1 h-1 bg-black rounded-full"></div>
                      <div className="absolute left-7 top-14 w-1 h-1 bg-black rounded-full"></div>
                      {/* Measure number */}
                      <div className="absolute -top-6 left-2 text-xs text-gray-600">3</div>
                    </div>

                    {/* Measure 4 */}
                    <div className="absolute left-96 top-0 w-32 h-full border-r border-black">
                      {/* Whole note */}
                      <div className="absolute left-8 top-6 text-2xl">𝅝</div>
                      {/* Fermata */}
                      <div className="absolute left-10 top-1 text-lg">𝄐</div>
                      {/* Crescendo */}
                      <div className="absolute left-4 top-18 text-xs italic">cresc.</div>
                      {/* Measure number */}
                      <div className="absolute -top-6 left-2 text-xs text-gray-600">4</div>
                    </div>
                  </div>
                </div>

                {/* Bass Clef Staff */}
                <div className="relative h-24">
                  {/* Staff Lines */}
                  {[0, 1, 2, 3, 4].map((line) => (
                    <div key={line} className="absolute w-full h-px bg-black" style={{ top: `${16 + line * 16}px` }} />
                  ))}

                  {/* Bass Clef */}
                  <div className="absolute left-4 top-1 text-4xl font-bold">𝄢</div>

                  {/* Time Signature */}
                  <div className="absolute left-20 top-3 text-xl font-bold">
                    <div>4</div>
                    <div>4</div>
                  </div>

                  {/* Bass Notes */}
                  <div className="absolute left-32 top-0 w-full h-full">
                    {/* Measure 1 - Bass line */}
                    <div className="absolute left-0 top-0 w-32 h-full border-r border-black">
                      <div className="absolute left-4 top-12 text-xl">♩</div>
                      <div className="absolute left-12 top-14 text-xl">♩</div>
                      <div className="absolute left-20 top-12 text-xl">♩</div>
                      <div className="absolute left-28 top-10 text-xl">♩</div>
                    </div>

                    {/* Measure 2 */}
                    <div className="absolute left-32 top-0 w-32 h-full border-r border-black">
                      <div className="absolute left-4 top-10 text-xl">𝅗𝅥</div>
                      <div className="absolute left-20 top-12 text-xl">𝅗𝅥</div>
                    </div>

                    {/* Measure 3 */}
                    <div className="absolute left-64 top-0 w-32 h-full border-r border-black">
                      <div className="absolute left-4 top-11 text-lg">♪</div>
                      <div className="absolute left-8 top-13 text-lg">♪</div>
                      <div className="absolute left-12 top-11 text-lg">♪</div>
                      <div className="absolute left-16 top-9 text-lg">♪</div>
                      <div className="absolute left-4 top-10 w-12 h-px bg-black"></div>
                      <div className="absolute left-24 top-11 text-lg">𝄽</div>
                    </div>

                    {/* Measure 4 */}
                    <div className="absolute left-96 top-0 w-32 h-full border-r border-black">
                      <div className="absolute left-8 top-10 text-2xl">𝅝</div>
                      <div className="absolute left-10 top-5 text-lg">𝄐</div>
                    </div>
                  </div>
                </div>

                {/* System Brace */}
                <div className="absolute left-0 top-0 h-48 w-2 flex items-center">
                  <div className="text-6xl">⎨</div>
                </div>
              </div>

              {/* System 2 */}
              <div className="relative">
                {/* Similar structure for second system */}
                <div className="relative h-24 mb-4">
                  {[0, 1, 2, 3, 4].map((line) => (
                    <div key={line} className="absolute w-full h-px bg-black" style={{ top: `${16 + line * 16}px` }} />
                  ))}

                  <div className="absolute left-4 top-2 text-4xl font-bold">𝄞</div>

                  <div className="absolute left-16 top-0 w-full h-full">
                    {/* Measures 5-8 with more complex notation */}
                    <div className="absolute left-0 top-0 w-32 h-full border-r border-black">
                      {/* Sixteenth notes */}
                      <div className="absolute left-2 top-4 text-sm">𝅘𝅥𝅯</div>
                      <div className="absolute left-5 top-6 text-sm">𝅘𝅥𝅯</div>
                      <div className="absolute left-8 top-4 text-sm">𝅘𝅥𝅯</div>
                      <div className="absolute left-11 top-2 text-sm">𝅘𝅥𝅯</div>
                      {/* Beam */}
                      <div className="absolute left-2 top-3 w-9 h-px bg-black"></div>
                      <div className="absolute left-2 top-2 w-9 h-px bg-black"></div>
                      {/* Accent marks */}
                      <div className="absolute left-3 top-1 text-xs">&gt;</div>
                      <div className="absolute left-9 top-1 text-xs">&gt;</div>
                      {/* Measure number */}
                      <div className="absolute -top-6 left-2 text-xs text-gray-600">5</div>
                    </div>

                    <div className="absolute left-32 top-0 w-32 h-full border-r border-black">
                      {/* Tied notes */}
                      <div className="absolute left-4 top-5 text-xl">♩</div>
                      <div className="absolute left-20 top-5 text-xl">♩</div>
                      {/* Tie */}
                      <div className="absolute left-8 top-4 w-8 h-2 border-t-2 border-black rounded-t-full"></div>
                      {/* Slur */}
                      <div className="absolute left-4 top-2 w-20 h-3 border-t-2 border-black rounded-t-full"></div>
                      {/* Measure number */}
                      <div className="absolute -top-6 left-2 text-xs text-gray-600">6</div>
                    </div>

                    <div className="absolute left-64 top-0 w-32 h-full border-r border-black">
                      {/* Triplet */}
                      <div className="absolute left-4 top-6 text-lg">♪</div>
                      <div className="absolute left-10 top-4 text-lg">♪</div>
                      <div className="absolute left-16 top-6 text-lg">♪</div>
                      {/* Triplet bracket */}
                      <div className="absolute left-4 top-1 w-12 h-px bg-black"></div>
                      <div className="absolute left-9 top-0 text-xs">3</div>
                      {/* Forte marking */}
                      <div className="absolute left-4 top-18 text-sm font-bold italic">f</div>
                      {/* Measure number */}
                      <div className="absolute -top-6 left-2 text-xs text-gray-600">7</div>
                    </div>

                    <div className="absolute left-96 top-0 w-32 h-full border-r-2 border-black">
                      {/* Final measure with double bar */}
                      <div className="absolute left-8 top-6 text-2xl">𝅝</div>
                      <div className="absolute left-10 top-1 text-lg">𝄐</div>
                      {/* Fortissimo */}
                      <div className="absolute left-4 top-18 text-sm font-bold italic">ff</div>
                      {/* Measure number */}
                      <div className="absolute -top-6 left-2 text-xs text-gray-600">8</div>
                      {/* Double bar line */}
                      <div className="absolute right-2 top-0 w-1 h-full bg-black"></div>
                      <div className="absolute right-0 top-0 w-1 h-full bg-black"></div>
                    </div>
                  </div>
                </div>

                {/* Bass clef for system 2 */}
                <div className="relative h-24">
                  {[0, 1, 2, 3, 4].map((line) => (
                    <div key={line} className="absolute w-full h-px bg-black" style={{ top: `${16 + line * 16}px` }} />
                  ))}

                  <div className="absolute left-4 top-1 text-4xl font-bold">𝄢</div>

                  {/* Corresponding bass notes for measures 5-8 */}
                  <div className="absolute left-16 top-0 w-full h-full">
                    <div className="absolute left-0 top-0 w-32 h-full border-r border-black">
                      <div className="absolute left-4 top-10 text-xl">♩</div>
                      <div className="absolute left-12 top-12 text-xl">♩</div>
                      <div className="absolute left-20 top-10 text-xl">♩</div>
                      <div className="absolute left-28 top-8 text-xl">♩</div>
                    </div>
                    <div className="absolute left-32 top-0 w-32 h-full border-r border-black">
                      <div className="absolute left-4 top-9 text-xl">𝅗𝅥</div>
                      <div className="absolute left-20 top-11 text-xl">𝅗𝅥</div>
                    </div>
                    <div className="absolute left-64 top-0 w-32 h-full border-r border-black">
                      <div className="absolute left-4 top-10 text-xl">♩</div>
                      <div className="absolute left-12 top-8 text-xl">♩</div>
                      <div className="absolute left-20 top-10 text-xl">♩</div>
                      <div className="absolute left-28 top-12 text-xl">♩</div>
                    </div>
                    <div className="absolute left-96 top-0 w-32 h-full border-r-2 border-black">
                      <div className="absolute left-8 top-10 text-2xl">𝅝</div>
                      <div className="absolute right-2 top-0 w-1 h-full bg-black"></div>
                      <div className="absolute right-0 top-0 w-1 h-full bg-black"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 top-0 h-48 w-2 flex items-center">
                  <div className="text-6xl">⎨</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Toolbar */}
      <Card>
        <CardContent className="pt-4">
          <Tabs defaultValue="properties" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="properties">Propiedades</TabsTrigger>
              <TabsTrigger value="import-export">Importar/Exportar</TabsTrigger>
              <TabsTrigger value="collaboration">Colaboración</TabsTrigger>
              <TabsTrigger value="playback">Reproducción</TabsTrigger>
            </TabsList>

            <TabsContent value="properties" className="mt-4">
              <div className="grid grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tonalidad</label>
                  <Select defaultValue="c-major">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="c-major">Do Mayor</SelectItem>
                      <SelectItem value="g-major">Sol Mayor</SelectItem>
                      <SelectItem value="d-major">Re Mayor</SelectItem>
                      <SelectItem value="a-minor">La menor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Compás</label>
                  <Select defaultValue="4/4">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4/4">4/4</SelectItem>
                      <SelectItem value="3/4">3/4</SelectItem>
                      <SelectItem value="2/4">2/4</SelectItem>
                      <SelectItem value="6/8">6/8</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tempo</label>
                  <div className="flex items-center gap-2">
                    <Slider value={tempo} onValueChange={setTempo} max={200} min={60} step={1} className="flex-1" />
                    <span className="w-12 text-sm">{tempo[0]} BPM</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Volumen</label>
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4" />
                    <Slider value={volume} onValueChange={setVolume} max={100} min={0} step={1} className="flex-1" />
                    <span className="w-8 text-sm">{volume[0]}%</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="import-export" className="mt-4">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Importar</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" onClick={handleOCRUpload}>
                      <Camera className="w-4 h-4 mr-2" />
                      OCR Musical (Imagen)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Upload className="w-4 h-4 mr-2" />
                      MusicXML
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Music className="w-4 h-4 mr-2" />
                      MIDI
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      MuseScore
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Exportar</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      MusicXML
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Music className="w-4 h-4 mr-2" />
                      MIDI
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Volume2 className="w-4 h-4 mr-2" />
                      Audio (MP3)
                    </Button>
                  </div>
                </div>
              </div>

              {showOCRDemo && (
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Wand2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm font-medium">Procesando imagen con OCR Musical...</span>
                  </div>
                  <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: "75%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Reconociendo notas, compases, dinámicas y articulaciones...
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="collaboration" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Colaboradores Activos</h3>
                  <Button size="sm">Invitar</Button>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    MG
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">María González</div>
                    <div className="text-xs text-muted-foreground">Editando compás 3-4</div>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    CR
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">Carlos Ruiz</div>
                    <div className="text-xs text-muted-foreground">Revisando dinámicas</div>
                  </div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="playback" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Configuración de Reproducción</h3>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <SkipBack className="w-4 h-4" />
                    </Button>
                    <Button size="sm">
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    <Button size="sm" variant="outline">
                      <SkipForward className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Instrumento de reproducción</label>
                    <Select defaultValue="acoustic-piano">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="acoustic-piano">Piano Acústico</SelectItem>
                        <SelectItem value="electric-piano">Piano Eléctrico</SelectItem>
                        <SelectItem value="harpsichord">Clavecín</SelectItem>
                        <SelectItem value="organ">Órgano</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Metrónomo</label>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline">
                        <Volume2 className="w-4 h-4" />
                      </Button>
                      <span className="text-sm">Activado</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Progreso de reproducción</label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">0:00</span>
                    <div className="flex-1 h-2 bg-muted rounded-full">
                      <div className="w-1/4 h-full bg-primary rounded-full"></div>
                    </div>
                    <span className="text-sm">3:45</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
