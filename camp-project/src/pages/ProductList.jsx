import React, { useState,useEffect } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductList() {

    //useState([]) Normal parantez () bunu bir fonksiyon olduğunu gösterir.
    // useState([]) Köşeli parantez [] ise Array içinde array olduğunu gösterir.
    // setProducts foncsiyondur. useState() için
    //products datasıda arraydır useState([]) için
    // elimizdeki products datanın başlangıcı boş array yani bu []
    const [products, setProducts] = useState([])
    //lifecycle hook react yaşam döngüsüne müdehale yapmamızı sağlıyor.
    useEffect(() =>{
        let productService =new ProductService()
        productService.getProduct().then(result=>setProducts(result.data.data))
    },[])
    
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Product Name</Table.HeaderCell>
                        <Table.HeaderCell>Unit Price</Table.HeaderCell>
                        <Table.HeaderCell>Unit in Stock</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Category Number</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        products.map(product => (
                            <Table.Row key={product.id}>
                                <Table.Cell>{product.productName}</Table.Cell>
                                <Table.Cell>{product.unitPrice}</Table.Cell>
                                <Table.Cell>{product.unitsInStock}</Table.Cell>
                                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                                <Table.Cell>{product.categoryId}</Table.Cell>
                            </Table.Row>
                        ))
                    }


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
