import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Stack } from '@mui/material';
import Public from '../layout/Public';
import IntuitIcon from '../public/images/intuit.svg';
import LemonadeFashionIcon from '../public/images/lemonade_fashion.svg';
import OneCampaignIcon from '../public/images/one_campaign.png';
import DellIcon from '../public/images/dell.svg';
import HeadwayIcon from '../public/images/headway.svg';
import ExperiaIcon from '../public/images/experia.jpeg';
import SpamAnalyzerImg from '../public/images/features/spam_analyzer.svg';
import ReputationDashboardImg from '../public/images/features/reputation_dashboard.svg';
import DmarcMonitoringImg from '../public/images/features/dmarc_monitoring.svg';
import CheckIcon from '@mui/icons-material/Check';
import Image from '../src/Image';
import { styled } from '@mui/material';
import Link from '../src/Link';
import SocialProof from '../components/SocialProof';
import CarlJohn from '../public/images/carl-johann.jpeg';
export default function Index() {
  const UnorderedList = styled(List)({
      // marginBottom: 32,
      // paddingLeft:32,
      // '& .MuiListItem-root::before' : {
      // }
  })

  const content = [
    {
      image: SpamAnalyzerImg,
      header: 'Predict if your email goes to spam or the Promotions tab',
      featureList: [
        'Find and fix inbox placement problems',
        'Run seed list tests for Gmail, Yahoo, Outlook, and other major providers',
        'Unlimited-inbox placement tests'
      ],
      icon : ()=> {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
        )
      },
      subTitle: 'Spam Analyzer',
      href: '/features/spam-analyzer'
    },
    {
      image: ReputationDashboardImg,
      header: 'Protect and monitor your sender reputation',
      featureList:[
        'Track domain and IP reputation seperately',
        'Instantly spot changes to important reputation metrics',
        'See your Google Postmaster Tools and SNDS data directly',
        'Pull in ISP feedback loops (FBLs) that matter to you',
        'Monitor unsubscribes, bounces, open, and click rates with 20+ ESP integrations'
      ],
      icon: ()=> {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        )
      },
      subTitle: 'Reputation Dashboard',
      href: '/features/reputation-dashboard'
    },
    {
      image: DmarcMonitoringImg,
      header: 'Find out who\'s sending from your brand\'s domain',
      featureList: [
        'Monitor DMARC compliance and failure rates',
        'Uncover sources sending unauthenticated email',
        'Resolve SPF or DKIM issues causing DMARC failures',
        'Detect and prevent email phishing or spoofing attacks'
      ],
      subTitle: 'DMARC Monitoring',
      href: '/features/dmarc-monitoring',
      icon: ()=>{
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
        )
      }
    }
  ]

  return (
    <Public>
        <Container maxWidth="lg">
        <Grid container
          alignItems={'center'}
          justifyContent='center'
          sx={{
            height:{
              md: '100vh'
            },
            mt:{
              xs: 4,
              md: 0,
            }
          }}
        >
          <Grid item md={6}
            sx={{
              textAlign: {
                xs: 'center',
                md: 'left'
              }
            }}
          >
            <Typography
              variant={'h3'}
              component={'h1'}
              gutterBottom
            >
              <Box sx={{
                color: 'primary.light'
              }}>Reach more</Box>
              inboxes with accurate deliverability data
            </Typography>
            <Typography
              variant={'body1'}
              gutterBottom
            >
              Analyze email content, manage sender reputation, test inbox placements and email previews, and monitor DMARC – all in one place.
            </Typography>
            {/* CTA */}
            <Stack spacing={0} sx={{mt:4}}>
              <Button variant='contained' size='large'>Start your 14 days trial</Button>
            </Stack>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
        <Grid  
          container 
          alignItems={'center'} 
          spacing={8} 
          justifyContent='space-between'
          sx={{
            my:4,
          }}>
          <Grid item md={2} xs={4}>
            <Image src={IntuitIcon} width="100%" height="40" layout="responsive" objectFit="contain"/>
          </Grid>
          <Grid item md={2} xs={4}>
            <Image src={LemonadeFashionIcon} width="100%" height="40" layout="responsive" objectFit="contain"
            />
          </Grid>
          <Grid item md={2} xs={4}>
            <Image src={OneCampaignIcon} width="100%" height="40" layout="responsive" objectFit="contain"/>
          </Grid>
          <Grid item md={2} xs={4}>
            <Image src={DellIcon} width='100%' height='40' layout='responsive' objectFit='contain'/>
          </Grid>
          <Grid item md={2} xs={4}>
            <Image src={HeadwayIcon} width='100%' height='40' layout='responsive' objectFit='contain'/>
          </Grid>
          <Grid item md={2} xs={4}>
            <Image src={ExperiaIcon} width='100%' height='40' layout='responsive' objectFit='contain'/>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          bgcolor: 'grey.50'
        }}
      >
        <Container 
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent:'center',
              pt:10
            }}
          >
            <Typography
              variant={'h4'}
              component={'h2'}
              gutterBottom
              sx={{
                textAlign:'center',
                mb:4,
                width: {
                  sm: '100%',
                  md: '80%'
                }
              }}
            >
              SendForensics is the all-in-one deliverability tool you've been looking for
            </Typography>
          </Box>
          {content.map((item,index)=> 
            <Grid 
              container
              alignItems='center'
              justifyContent='center'
              spacing={8}
              sx={{
                height: {
                  xs: 'inherit',
                  md:'100vh'
                },
                flexDirection: {
                  md: ((index+1) % 2 == 0) ? 'row-reverse' : ''
                }
              }}
              key={index}
            >
              <Grid item md={6} xs={12}>
                <Box 
                  sx={{
                    minHeight: 350,
                    width: '100%',
                    position: 'relative',
                    display: 'block'
                  }}
                >
                  <Image src={item.image} width='100%' height='100%' layout='responsive' objectFit='contain'/>
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                {/* icon */}
                <Stack 
                  direction='row' 
                  spacing={1}
                  alignItems='center'
                  sx={{
                    mb:1
                  }}
                  >
                  <Box
                    sx={{
                      px:1,
                      py: 0.5,
                      borderRadius: 50,
                      bgcolor: 'primary.softDark',
                      color: 'primary.main',
                      display: 'inline-block',
                      '& svg': {
                        height: 40,
                        width:40,
                      }
                    }}
                  >
                    {item.icon()}
                  </Box>
                  <Typography
                    variant='subtitle1'
                  >
                    {item.subTitle}
                  </Typography>
                </Stack>
                <Typography
                  variant='h5'
                  gutterBottom
                >
                  {item.header}
                </Typography>
                <UnorderedList
                  sx={{
                    mb:4,
                  }}
                >
                  {item.featureList.map((list, i) => 
                    <ListItem key={i}>
                      <ListItemIcon>
                        <CheckIcon sx={{color: 'primary.main'}}/>
                      </ListItemIcon>
                      <ListItemText>
                        {list}
                      </ListItemText>
                    </ListItem>
                  )}
                </UnorderedList>
                <Button
                  component={Link}
                  href={item.href}
                  variant='outlined'
                  color='primary'
                  sx={{
                    boxShadow: 'shadows[100]'
                  }}
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          )}
        </Container>
      </Box>
      <SocialProof
        quote={'It\'s so much faster to find out how to improve our email campaigns with SendForensics.'}
        profilePhoto={CarlJohn}
        name={'Carl-Johan Larsson'}
      />     
    </Public>
  );
}
