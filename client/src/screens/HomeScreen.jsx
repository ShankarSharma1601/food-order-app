import React, { useEffect } from 'react'
//import AllPizzas from '../pizza-data'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import Pizza from '../compnents/Pizza'
import { getAllPizzas } from '../actions/pizzaAction'
import Loader from '../compnents/Loader'
import Error from '../compnents/Error'
import Filters from '../compnents/Filters'
import Footer from '../compnents/Footer'



const HomeScreen = () => {
  const dispatch = useDispatch()
  const pizzastate = useSelector(state => state.getAllPizzaReducer)
  const { loading, pizzas, error } = pizzastate;
  useEffect(() => { dispatch(getAllPizzas()) }, [dispatch])
  return (
    <>
      <Container>
        {loading ? (
          <Loader/>
        ) : error ? (
          <Error>Error while fetching pizzas {error}</Error>
          
        ) : (
          <Row>
          <Filters />
            {pizzas.map((pizza) => (
              <Col md={4} key={pizza.name}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
      <Footer/>
    </>
  )
}

export default HomeScreen

