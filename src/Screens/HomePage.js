import React from 'react'
import Timeline from '../components/Timeline'
import FAQSection from "../components/FAQSection"
import Container from '@mui/material/Container';
import { useSpring, animated } from 'react-spring'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Cards from "../components/Cards"
import Typography from '@mui/material/Typography';
import './homepage.css' 
import pic from '../assets/pic.webp'
import TextField from '@mui/material/TextField';



import Box from '@mui/material/Box';

function HomePage() {

  const styles = useSpring({
    loop: false,
    to: [
      { opacity: 0, color: '#edebd7' },
      { opacity: 1, color: '#edebd7' },
    ],
    from: { opacity: 0, color: 'black' },
  })
  const PaperStyle={ margin:"6% auto" ,height: "70vh" ,width:"90%" ,maxWidth:"1200px"}
  return (
    <>
    <div>
        <Grid container style={PaperStyle}   component={Paper} elevation={10}>
            
           
          <Grid item 
          
            xs={12}
          sm={6}
          md={6}>
          <Box  sx={{ m: 4 }}>
          <Grid container spacing={2}>
              <Grid item xs={12}>
              <Typography class = "LoginHeading" component="h1" variant="h5">
            Sign in
          </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  
                />
              </Grid>
              </Grid>
             
             <Grid item xs={12} >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,bgcolor:"#90CAF9",color:"black"}}
              
            >
              Sign In
            </Button>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
               
              </Grid>
              <Grid item xs={12}>
                
              </Grid>
            </Grid>
          </Box>
          </Grid>
          <Grid item 
            
            xs={0}
          sm={6}
          md={6}
          sx={{
            display: { xs: "none", md: "block",sm: "block"  }
          }}>
          <img src={pic}/>
          </Grid>
      
        
      </Grid>
      </div>
     {/* <Grid container spacing={2}>
            <Grid item sx={{
              
            }} xs={12} sm={6} >
                <Typography style ={{color:"#edebd7"}}variant="h4"  >Create Your Own Digital Art</Typography>
            </Grid>
            <Grid item sx={{
                display: { xs: "none", md: "block", sm: "block" }
            }} sm={6} >
                <img src={pic}/>
            </Grid>
            </Grid> */}
  
    <Container maxWidth="lg">
    <Grid container spacing={2}>
            <Grid item md={12} sm={12} m={4}>
                <Typography style ={{color:"#edebd7"}}variant="h4" className="fancy" >BREIF INTRO</Typography>
            </Grid>
            </Grid>
      <animated.p style={styles}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis autem odit rerum iusto tempore sint ut illum minima ab aut. Ea facere inventore quae aut qui quibusdam, corporis suscipit quo!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit doloremque pariatur, temporibus nulla unde quis magnam voluptates ipsam optio. Esse ipsa itaque reiciendis qui explicabo. Sapiente dolorum fuga obcaecati.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequuntur eligendi aut illo officia iste dicta porro omnis, hic repellendus fuga repellat reprehenderit deleniti. Magni repellat rem odit minus quidem?
      </animated.p>
      <Grid container spacing={2}>
            <Grid item  md={12} sm={12} m={4}>
                <Typography style ={{color:"#edebd7"}}variant="h4" className="fancy" >Timeline</Typography>
            </Grid>
            </Grid>
      <Timeline  m={3}/>
      <Grid container spacing={2}>
            <Grid item md={12} sm={12} m={4}>
                <Typography style ={{color:"#edebd7"}}variant="h4" className="fancy" >FAQ</Typography>
            </Grid>
            </Grid>




      <FAQSection />





      <Grid container spacing={2}>
            <Grid item sx={{
                display: { xs: "none", md: "block", sm: "block" }
            }} md={12} sm={12} m={4}>
                <Typography style ={{color:"whitesmoke"}}variant="h4" className="fancy" >OUR TEAM</Typography>
            </Grid>
            </Grid>
      <Grid  container spacing={2}>
        <Grid item xs={6} sm={3}>
          <Cards/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Cards/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Cards/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Cards/>
        </Grid>

        </Grid>
     
    </Container>
    
   
    </>
  )
}

export default HomePage