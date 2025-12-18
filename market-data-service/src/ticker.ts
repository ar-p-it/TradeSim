// TypeScript demo: typed random-walk ticker with listener subscription
export interface Tick {
  ts: number
  symbol: string
  price: number
  size: number
  side: 'BUY' | 'SELL'
}

export type TickListener = (t: Tick) => void

export class Ticker {
  private price: number
  private timer: any = null
  private listeners: Set<TickListener> = new Set()

  constructor(private symbol: string, startPrice = 100) {
    this.price = startPrice
  }

  on(listener: TickListener): void { this.listeners.add(listener) }
  off(listener: TickListener): void { this.listeners.delete(listener) }

  start(intervalMs = 500): void {
    if (this.timer) return
    this.timer = setInterval(() => this.emit(), intervalMs)
  }

  stop(): void {
    if (this.timer) clearInterval(this.timer)
    this.timer = null
  }

  private emit(): void {
    const delta = (Math.random() - 0.5) * 0.5
    this.price = Math.max(0.01, this.price + delta)
    const tick: Tick = {
      ts: Date.now(),
      symbol: this.symbol,
      price: Number(this.price.toFixed(2)),
      size: Math.floor(Math.random() * 100) + 1,
      side: Math.random() > 0.5 ? 'BUY' : 'SELL'
    }
    for (const l of this.listeners) l(tick)
  }
}

// Demo usage (non-executed):
// const t = new Ticker('TSIM', 100)
// t.on(console.log)
// t.start(250)
