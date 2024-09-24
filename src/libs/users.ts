const apiUrl = 'https://dummyjson.com/users'

export type Address = {
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    coordinates: {
        lat: number
        lng: number
    }
    country: string
}

export type BankAccount = {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
}

export type Company = {
    department: string
    name: string
    title: string
    address: Address
}

export type CryptoAddress = {
    coin: string
    wallet: string
    network: string
}

export type User = {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: {
    color: string
    type: string
  }
  ip: string
  address: Address
  macAddress: string
  university: string
  bank: BankAccount
  company: Company
  ein: string
  ssn: string
  userAgent: string
  role: string
  crypto: CryptoAddress
}

export type UsersResponse = {
    total: number
    limit: number
    skip: number
    users: Array<User>
  }
  

export const getUsers = async ({ page = 1, searchTerm = '', pageSize = 16 }): Promise<UsersResponse> => {
    const response = await fetch(`${apiUrl}/search?limit=${pageSize}&skip=${(page - 1) * pageSize}&sortBy=lastName&q=${searchTerm}`)
    return await response.json()
}