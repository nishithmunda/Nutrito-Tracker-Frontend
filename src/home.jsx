

import PropTypes from 'prop-types'
import React, { Component } from 'react'


import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


class DesktopContainer extends Component {

  render() {

    return (
      <Responsive >
        <Visibility>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 600, marginLeft:7,marginRight:7 }}
            vertical
          >
              
           
              <Container text>
    <Header
      as='h1'
      content='NUTRITO.'
      inverted
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop:  '2em',
      }}
    />
    <Header
      as='h2'
      content='Balance Your World'
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop:'1.5em',
        marginBottom:'5em'
      }}
    />
     
    <Button size="huge" color='black' icon="bicycle"  href='/nutrito'  >
               
    </Button>
        
   
  </Container>
          </Segment>
          
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            NUTRIENT
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            A substance obtained from food and used in the body to promote growth, maintenance, and repair of body tissues.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              CALORIES PER DAY
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            <pre>
            Carbohydrates: 247gram<br />
            Proteins     : 130gram<br />
            Fats         : 56gram
            </pre>  
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            {/* <Image bordered rounded size='large' src={require("./picture.png")} /> */}
            <Image  size='large' src={require("./picture.png")} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            CARBOHYDRATES
            </Header>
            <p style={{ fontSize: '1.33em' }}>For people who are physically active or want to maintain their weight, a range of 100­–150 grams of carbs per day may have benefits. For those aiming to lose weight quickly, going under 50 grams per day.</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
             PROTEIN
            </Header>
            <p style={{ fontSize: '1.33em' }} > Protein is a structural molecule assembled out of amino acids, many of which your body can’t produce on its own. Animal foods are usually high in protein, providing all essential amino acids.
              {/* <Image avatar src='' /> */}
      
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }} textAlign="center">
        FATS
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        Fats provide a number of benefits for your body, including serving as an energy source, regulating hormones and genes, maintaining brain health and making food more tasty and satisfying.
        </p>
       

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>QUOTES</a>
        </Divider>

        <Header as='h3'  textAlign='center' style={{ fontSize: '2em' } }>
          "EAT BETTER NOT LESS"
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          
        </p>
        
      </Container>
    </Segment>

  {/* Footer */}
    <Segment inverted vertical style={{ padding: '8em 0em' }}>
      <Container> 
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                
              <List.Item as='a'>No Need To Contact Us</List.Item>
                
                
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Self-Service</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Extras
              </Header>
              <p>
              Nothing to See Here Scroll Up
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  
          
        </Visibility>

      </Responsive>
    )
  }
}




export default DesktopContainer