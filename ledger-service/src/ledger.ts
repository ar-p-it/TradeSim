// TypeScript demo: minimal double-entry ledger
export class Account {
  constructor(public id: string, public name: string, public balance = 0) {}
}

export class Entry {
  constructor(
    public ref: string,
    public debitAccountId: string,
    public creditAccountId: string,
    public amount: number,
    public ts: number = Date.now()
  ) {}
}

export class Ledger {
  private accounts = new Map<string, Account>()
  private entries: Entry[] = []

  addAccount(id: string, name: string): Account {
    if (this.accounts.has(id)) throw new Error('Account exists')
    const acc = new Account(id, name)
    this.accounts.set(id, acc)
    return acc
  }

  getAccount(id: string): Account {
    const acc = this.accounts.get(id)
    if (!acc) throw new Error(`Account ${id} not found`)
    return acc
  }

  post(ref: string, debitId: string, creditId: string, amount: number): Entry {
    if (!Number.isFinite(amount) || amount <= 0) throw new Error('amount must be > 0')
    const debit = this.getAccount(debitId)
    const credit = this.getAccount(creditId)
    const entry = new Entry(ref, debitId, creditId, amount)
    this.entries.push(entry)
    debit.balance += amount
    credit.balance -= amount
    return entry
  }

  listEntries(): Entry[] { return [...this.entries] }
  listAccounts(): Account[] { return [...this.accounts.values()] }
}

// Demo usage (non-executed):
// const ledger = new Ledger()
// ledger.addAccount('cash', 'Cash')
// ledger.addAccount('receivable', 'Receivable')
// ledger.post('T-0001', 'cash', 'receivable', 100)
// console.log(ledger.listAccounts())
