"use client"

import { useEffect, useRef, useState, useCallback } from 'react'
import '@xterm/xterm/css/xterm.css'
import Link from 'next/link'
import { createFileSystem, FileSystem } from '@/lib/fileSystem'
import projectsData from '@/data/projects.json'

// Import Terminal and FitAddon types only
import type { Terminal } from '@xterm/xterm'
import type { FitAddon } from '@xterm/addon-fit'


export default function TerminalPage() {
  const terminalRef = useRef<HTMLDivElement>(null)
  const xtermRef = useRef<Terminal | null>(null)
  const fitAddonRef = useRef<FitAddon | null>(null)
  
  const [currentPath, setCurrentPath] = useState<string[]>([])
  const currentPathRef = useRef<string[]>([])
  const commandHistoryRef = useRef<string[]>([])
  const fileSystemRef = useRef<FileSystem>(createFileSystem())
  const [isInitialized, setIsInitialized] = useState(false)

  const writePrompt = useCallback((term: Terminal, path: string[]) => {
    const pathStr = path.length === 0 ? '~' : `~/${path.join('/')}`
    term.write(`\x1b[1;32mnaman@portfolio\x1b[0m:\x1b[1;34m${pathStr}\x1b[0m$ `)
  }, [])

  const getCurrentDirectory = useCallback((path: string[]): any => {
    console.log('getCurrentDirectory called with path:', path)
    let current: any = fileSystemRef.current
    console.log('Starting at root, keys:', Object.keys(current))
    
    for (const dir of path) {
      console.log(`Looking for directory: ${dir}`)
      console.log(`Current keys:`, Object.keys(current))
      console.log(`Current[${dir}]:`, current[dir])
      
      if (current[dir] && current[dir].type === 'directory' && current[dir].children) {
        current = current[dir].children
        console.log(`Moved into ${dir}, new keys:`, Object.keys(current))
      } else {
        console.log(`Failed to find ${dir}, returning current`)
        return current
      }
    }
    console.log('Final directory keys:', Object.keys(current))
    return current
  }, [])

  const handleCommand = useCallback((cmd: string, term: Terminal, path: string[]) => {
    const parts = cmd.trim().split(/\s+/)
    const command = parts[0]
    const args = parts.slice(1)
    let newPath = path

    switch (command) {
      case 'info':
        term.writeln('')
        term.writeln('\x1b[1;36m╔════════════════════════════════════════════════════════════╗\x1b[0m')
        term.writeln('\x1b[1;36m║                    PORTFOLIO INFORMATION                   ║\x1b[0m')
        term.writeln('\x1b[1;36m╚════════════════════════════════════════════════════════════╝\x1b[0m')
        term.writeln('')
        term.writeln('  \x1b[1;33mName:\x1b[0m           Naman Saini')
        term.writeln('  \x1b[1;33mRole:\x1b[0m           Full Stack Developer')
        term.writeln('  \x1b[1;33mBased:\x1b[0m          India')
        term.writeln('  \x1b[1;33mEducation:\x1b[0m      B.Tech, Central University of Haryana')
        term.writeln('')
        term.writeln('  \x1b[1;33mSkills:\x1b[0m')
        term.writeln('    • Languages:  JavaScript, TypeScript, Python, C++')
        term.writeln('    • Frontend:   React.js, Next.js, Tailwind CSS')
        term.writeln('    • Backend:    Node.js, MongoDB, PostgreSQL')
        term.writeln('    • Tools:      Git, GitHub, RESTful APIs')
        term.writeln('')
        term.writeln('  \x1b[1;33mProjects:\x1b[0m       ' + projectsData.projects.length + ' listed in \x1b[1;34m/projects\x1b[0m')
        term.writeln('')
        term.writeln('  \x1b[1;33mContact:\x1b[0m')
        term.writeln('    • Email:      namansaini464@gmail.com')
        term.writeln('    • GitHub:     github.com/namans4ini')
        term.writeln('    • LinkedIn:   linkedin.com/in/namans4ini')
        term.writeln('    • LeetCode:   leetcode.com/namans4ini')
        term.writeln('')
        term.writeln('  \x1b[1;32mTip:\x1b[0m Use \x1b[1;33mcat about.txt\x1b[0m or \x1b[1;33mcat skills.txt\x1b[0m for more details')
        term.writeln('       Type \x1b[1;33mgui\x1b[0m to switch to GUI mode')
        term.writeln('')
        break

      case 'help':
        term.writeln('\x1b[1;36mAvailable Commands:\x1b[0m')
        term.writeln('')
        term.writeln('  \x1b[1;33minfo\x1b[0m            - Display portfolio summary')
        term.writeln('  \x1b[1;33mls\x1b[0m              - List files and directories')
        term.writeln('  \x1b[1;33mcd <dir>\x1b[0m        - Change directory')
        term.writeln('  \x1b[1;33mcat <file>\x1b[0m      - Display file contents')
        term.writeln('  \x1b[1;33mpwd\x1b[0m             - Print working directory')
        term.writeln('  \x1b[1;33mclear\x1b[0m           - Clear terminal screen')
        term.writeln('  \x1b[1;33m./<file>.sh\x1b[0m     - Execute shell script')
        term.writeln('  \x1b[1;33mgui\x1b[0m             - Switch to GUI mode')
        term.writeln('  \x1b[1;33mhelp\x1b[0m            - Show this help message')
        term.writeln('')
        break

      case 'ls':
        const currentDir = getCurrentDirectory(path)
        term.writeln('')
        Object.entries(currentDir).forEach(([name, node]: [string, any]) => {
          if (node.type === 'directory') {
            term.writeln(`  \x1b[1;34m${name}/\x1b[0m`)
          } else if (node.executable) {
            term.writeln(`  \x1b[1;32m${name}\x1b[0m`)
          } else {
            term.writeln(`  ${name}`)
          }
        })
        term.writeln('')
        break

      case 'cd':
        if (args.length === 0 || args[0] === '~') {
          newPath = []
          setCurrentPath([])
          currentPathRef.current = []
        } else if (args[0] === '..') {
          if (path.length > 0) {
            newPath = path.slice(0, -1)
            setCurrentPath(newPath)
            currentPathRef.current = newPath
          }
        } else {
          const target = args[0]
          const currentDir: any = getCurrentDirectory(path)
          
          // Debug: log what we're looking at
          console.log('CD Debug - Current path:', path)
          console.log('CD Debug - Target:', target)
          console.log('CD Debug - Current dir:', currentDir)
          console.log('CD Debug - Current dir keys:', Object.keys(currentDir))
          console.log('CD Debug - Target exists?', currentDir[target])
          console.log('CD Debug - Target type:', currentDir[target]?.type)
          console.log('CD Debug - Is directory?', currentDir[target]?.type === 'directory')
          
          if (currentDir[target] && currentDir[target].type === 'directory') {
            newPath = [...path, target]
            setCurrentPath(newPath)
            currentPathRef.current = newPath
            console.log('CD Debug - Success! New path:', newPath)
          } else {
            term.writeln(`\x1b[1;31mcd: ${target}: No such directory\x1b[0m`)
            console.log('CD Debug - Failed to cd')
          }
        }
        break

      case 'cat':
        if (args.length === 0) {
          term.writeln('\x1b[1;31mcat: missing file operand\x1b[0m')
        } else {
          const fileName = args[0]
          const currentDir: any = getCurrentDirectory(path)
          if (currentDir[fileName] && currentDir[fileName].type === 'file') {
            term.writeln('')
            const content = currentDir[fileName].content || ''
            content.split('\n').forEach((line: string) => {
              term.writeln(line)
            })
            term.writeln('')
          } else {
            term.writeln(`\x1b[1;31mcat: ${fileName}: No such file\x1b[0m`)
          }
        }
        break

      case 'pwd':
        const pathStr = path.length === 0 ? '/home/naman' : `/home/naman/${path.join('/')}`
        term.writeln(pathStr)
        break

      case 'clear':
        term.clear()
        break

      case 'gui':
        if (typeof window !== 'undefined') {
          window.location.href = '/gui'
        }
        return

      default:
        if (command.startsWith('./') && command.endsWith('.sh')) {
          const fileName = command.substring(2)
          const currentDir: any = getCurrentDirectory(path)
          if (currentDir[fileName] && currentDir[fileName].executable) {
            term.writeln(`\x1b[1;32mExecuting ${fileName}...\x1b[0m`)
            if (currentDir[fileName].action) {
              currentDir[fileName].action!()
            }
          } else {
            term.writeln(`\x1b[1;31mbash: ${command}: No such file or directory\x1b[0m`)
          }
        } else {
          term.writeln(`\x1b[1;31mbash: ${command}: command not found\x1b[0m`)
        }
        break
    }

    writePrompt(term, newPath)
  }, [getCurrentDirectory, writePrompt])

  useEffect(() => {
    if (!terminalRef.current || xtermRef.current || typeof window === 'undefined') return

    // Dynamically import xterm modules on client side only
    Promise.all([
      import('@xterm/xterm').then(mod => mod.Terminal),
      import('@xterm/addon-fit').then(mod => mod.FitAddon)
    ]).then(([TerminalClass, FitAddonClass]) => {
      const term = new TerminalClass({
      cursorBlink: true,
      fontSize: 14,
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      theme: {
        background: '#0a0a0a',
        foreground: '#ededed',
        cursor: '#ededed',
        black: '#0a0a0a',
        red: '#ef4444',
        green: '#22c55e',
        yellow: '#eab308',
        blue: '#3b82f6',
        magenta: '#a855f7',
        cyan: '#06b6d4',
        white: '#ededed',
        brightBlack: '#52525b',
        brightRed: '#f87171',
        brightGreen: '#4ade80',
        brightYellow: '#facc15',
        brightBlue: '#60a5fa',
        brightMagenta: '#c084fc',
        brightCyan: '#22d3ee',
        brightWhite: '#ffffff'
      }
    })

    const fitAddon = new FitAddonClass()
    term.loadAddon(fitAddon)
    
    if (terminalRef.current) {
      term.open(terminalRef.current)
    }
    
    // Wait for terminal to be ready before fitting
    setTimeout(() => {
      try {
        fitAddon.fit()
        setIsInitialized(true)
      } catch (e) {
        console.error('Error fitting terminal:', e)
      }
    }, 100)

    xtermRef.current = term
    fitAddonRef.current = fitAddon

    // Welcome message
    term.writeln('\x1b[1;32m╔══════════════════════════════════════════════════════════════╗\x1b[0m')
    term.writeln('\x1b[1;32m║                                                              ║\x1b[0m')
    term.writeln('\x1b[1;32m║\x1b[0m              \x1b[1;36mWelcome to Naman Saini\'s Portfolio\x1b[0m              \x1b[1;32m║\x1b[0m')
    term.writeln('\x1b[1;32m║\x1b[0m                        \x1b[1;33mTerminal Interface\x1b[0m                    \x1b[1;32m║\x1b[0m')
    term.writeln('\x1b[1;32m║                                                              ║\x1b[0m')
    term.writeln('\x1b[1;32m╚══════════════════════════════════════════════════════════════╝\x1b[0m')
    term.writeln('')
    term.writeln('\x1b[1;37mType \x1b[1;33m"info"\x1b[1;37m to see portfolio summary.\x1b[0m')
    term.writeln('\x1b[1;37mType \x1b[1;33m"help"\x1b[1;37m to see available commands.\x1b[0m')
    term.writeln('\x1b[1;37mType \x1b[1;33m"ls"\x1b[1;37m to list files and directories.\x1b[0m')
    term.writeln('')
    
    writePrompt(term, [])

    let lineBuffer = ''
    let historyIdx = -1

    const dataHandler = term.onData((data) => {
      const code = data.charCodeAt(0)

      if (code === 13) { // Enter
        term.write('\r\n')
        if (lineBuffer.trim()) {
          handleCommand(lineBuffer.trim(), term, currentPathRef.current)
          // Only add to history if it's different from the last command
          const lastCommand = commandHistoryRef.current[commandHistoryRef.current.length - 1]
          if (lineBuffer.trim() !== lastCommand) {
            commandHistoryRef.current = [...commandHistoryRef.current, lineBuffer.trim()]
          }
          historyIdx = -1
        } else {
          writePrompt(term, currentPathRef.current)
        }
        lineBuffer = ''
        return
      }

      if (code === 127) { // Backspace
        if (lineBuffer.length > 0) {
          lineBuffer = lineBuffer.slice(0, -1)
          term.write('\b \b')
        }
        return
      }

      if (code === 27) { // Escape sequences (arrow keys)
        // Read the next characters for escape sequences
        const next1 = data.charCodeAt(1)
        const next2 = data.charCodeAt(2)
        
        if (next1 === 91) { // CSI sequence
          if (next2 === 65) { // Up arrow
            const history = commandHistoryRef.current
            if (history.length > 0) {
              if (historyIdx === -1) {
                historyIdx = history.length - 1
              } else if (historyIdx > 0) {
                historyIdx--
              }
              
              // Clear current line
              term.write('\r\x1b[K')
              writePrompt(term, currentPathRef.current)
              
              // Write history command
              lineBuffer = history[historyIdx]
              term.write(lineBuffer)
            }
            return
          } else if (next2 === 66) { // Down arrow
            const history = commandHistoryRef.current
            if (historyIdx !== -1) {
              if (historyIdx < history.length - 1) {
                historyIdx++
                // Clear current line
                term.write('\r\x1b[K')
                writePrompt(term, currentPathRef.current)
                
                // Write history command
                lineBuffer = history[historyIdx]
                term.write(lineBuffer)
              } else {
                // Clear to empty line
                historyIdx = -1
                lineBuffer = ''
                term.write('\r\x1b[K')
                writePrompt(term, currentPathRef.current)
              }
            }
            return
          }
        }
        return
      }

      if (code < 32) { // Control characters
        return
      }

      lineBuffer += data
      term.write(data)
    })

    const handleResize = () => {
      if (fitAddonRef.current && isInitialized) {
        try {
          fitAddonRef.current.fit()
        } catch (e) {
          console.error('Error on resize:', e)
        }
      }
    }
    
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      dataHandler.dispose()
      term.dispose()
      xtermRef.current = null
    }
    })
  }, [writePrompt, handleCommand, isInitialized])

  return (
    <div className="min-h-screen bg-zinc-950 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <Link
            href="/gui"
            className="text-zinc-400 cursor-pointer! p-2 hover:text-zinc-200 text-sm transition-colors"
          >
            Switch to GUI →
          </Link>
        </div>
        <div 
          ref={terminalRef} 
          className="rounded-lg overflow-hidden shadow-2xl border border-zinc-800"
          style={{ height: 'calc(100vh - 120px)' }}
        />
      </div>
    </div>
  )
}
