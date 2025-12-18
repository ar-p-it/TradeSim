// TypeScript demo: strongly-typed order request/response and validation helpers
export type Side = 'BUY' | 'SELL'
export type OrderType = 'LIMIT' | 'MARKET'

export interface OrderRequest {
  symbol: string
  side: Side
  type: OrderType
  quantity: number
  price?: number
  clientId: string
}

export interface OrderResponse {
  orderId: string
  status: 'ACCEPTED' | 'REJECTED'
  reason?: string
  receivedAt: string
}

export function validateOrder(req: OrderRequest): string[] {
  const errors: string[] = []
  if (!req.symbol) errors.push('symbol is required')
  if (!['BUY', 'SELL'].includes(req.side)) errors.push('side must be BUY or SELL')
  if (!['LIMIT', 'MARKET'].includes(req.type)) errors.push('type must be LIMIT or MARKET')
  if (!Number.isFinite(req.quantity) || req.quantity <= 0) errors.push('quantity must be > 0')
  if (req.type === 'LIMIT' && (!Number.isFinite(req.price!) || (req.price || 0) <= 0)) {
    errors.push('price must be > 0 for LIMIT')
  }
  return errors
}

export function makeLimit(symbol: string, side: Side, price: number, quantity: number, clientId = 'ts-demo'): OrderRequest {
  return { symbol, side, type: 'LIMIT', price, quantity, clientId }
}

export function mockPlaceOrder(req: OrderRequest): OrderResponse {
  const errors = validateOrder(req)
  if (errors.length) {
    return { orderId: 'N/A', status: 'REJECTED', reason: errors.join('; '), receivedAt: new Date().toISOString() }
  }
  return { orderId: cryptoRandomId(), status: 'ACCEPTED', receivedAt: new Date().toISOString() }
}

function cryptoRandomId(): string {
  // Small cross-runtime ID helper
  const bytes = new Uint8Array(16)
  for (let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256)
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('')
}

// Demo usage (non-executed):
// const req = makeLimit('TSIM', 'BUY', 101.25, 10)
// const res = mockPlaceOrder(req)
// console.log(res)
