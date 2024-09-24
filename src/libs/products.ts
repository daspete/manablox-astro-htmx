const apiUrl = 'https://dummyjson.com/products'

export type Review = {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
}

export type Product = {
  id: number
  title: string
  price: number
  thumbnail: string
  description: string
  category: string
  rating: number
  stock: number
  tags: Array<string>
  brand: string
  sku: string
  weight: number
  dimensions: {
    width: number
    height: number
    depth: number
  }
  warrantyInformaton: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Array<Review>
  returnPolicy: string
  minimumOrderQuantity: number
  meta: {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
  }
  images: Array<string>
}

export type ProductsResponse = {
  total: number
  limit: number
  skip: number
  products: Array<Product>
}

export const getProducts = async ({ page = 1, searchTerm = '', pageSize = 16 }): Promise<ProductsResponse> => {
  const response = await fetch(`${apiUrl}/search?limit=${pageSize}&skip=${(page - 1) * pageSize}&sortBy=title&q=${searchTerm}`)
  return await response.json()
}
