'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

export default function TestBuilderPage() {
  const [questions, setQuestions] = useState([{ id: 1, text: '', marks: 1 }])
  const [selectedQuestion, setSelectedQuestion] = useState(1)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* ✅ Top Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-2 p-4 bg-white shadow-sm sticky top-0 z-10"
      >
        <Input placeholder="Enter Test Title" className="w-full sm:w-1/2" />
        <div className="flex gap-2">
          <Button variant="outline">Save Draft</Button>
          <Button>Publish</Button>
        </div>
      </motion.div>

      {/* ✅ Responsive Layout */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Left Panel — Metadata */}
        <aside className="w-full lg:w-1/5 bg-white border-r p-4 space-y-4">
          <Card>
            <CardHeader><CardTitle>Test Details</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Duration (mins)" />
              <Select>
                <SelectTrigger><SelectValue placeholder="Select Purpose" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="diagnostic">Diagnostic</SelectItem>
                  <SelectItem value="formative">Formative</SelectItem>
                  <SelectItem value="summative">Summative</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger><SelectValue placeholder="Math Level" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="core">Core</SelectItem>
                  <SelectItem value="extended">Extended</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </aside>

        {/* Middle Panel — Question List */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Card>
            <CardHeader><CardTitle>Questions</CardTitle></CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                {questions.map((q) => (
                  <motion.div
                    key={q.id}
                    onClick={() => setSelectedQuestion(q.id)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-3 rounded-lg border cursor-pointer ${
                      selectedQuestion === q.id ? 'bg-blue-50 border-blue-400' : 'bg-white'
                    }`}
                  >
                    <div className="flex justify-between">
                      <span>Question {q.id}</span>
                      <span>{q.marks} mark(s)</span>
                    </div>
                  </motion.div>
                ))}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    setQuestions([...questions, { id: questions.length + 1, text: '', marks: 1 }])
                  }
                >
                  + Add Question
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Right Panel — Question Editor */}
        <aside className="w-full lg:w-1/3 bg-gray-100 p-4 border-l space-y-3">
          <Card>
            <CardHeader><CardTitle>Question Editor</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <Textarea placeholder="Enter question text (supports KaTeX/MathJax)" rows={4} />
              <Input type="file" accept="image/*" />
              <Input placeholder="Marks" type="number" />
              <Select>
                <SelectTrigger><SelectValue placeholder="Question Type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="mcq">Multiple Choice</SelectItem>
                  <SelectItem value="expression">Expression</SelectItem>
                  <SelectItem value="short-answer">Short Answer</SelectItem>
                </SelectContent>
              </Select>

              {/* Mark Scheme Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">Add Mark Scheme</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader><DialogTitle>Mark Scheme</DialogTitle></DialogHeader>
                  <div className="space-y-3">
                    <Textarea placeholder="Step description" />
                    <Input placeholder="Expected answer" />
                    <Input placeholder="Marks for this step" type="number" />
                    <Button>Add Step</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Assignment Panel */}
          <Card>
            <CardHeader><CardTitle>Assign to Class</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Search class or section" />
              <Input type="datetime-local" />
              <Button className="w-full">Assign Test</Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  )
}
