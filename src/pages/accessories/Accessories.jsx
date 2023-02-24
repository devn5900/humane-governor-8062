import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Accessories = () => {
    

  return (
    <Box overflow={'hidden'}>
        {/* Head Section */}

        {/* Carousel */}
        <Link to='/accessories/products'><Flex gap={'15px'}>
            <Box>
                <Image src='https://images.bewakoof.com/uploads/grid/app/mobile-cover-banner-1x1-1675408832.jpg'></Image>
            </Box>
            <Box>
                <Image src='https://images.bewakoof.com/uploads/grid/app/1x1Banner-GraphicBags-01-1676555256.jpg'></Image>
            </Box>
            <Box>
                <Image src='https://images.bewakoof.com/uploads/grid/app/3-1672894716.gif'></Image>
            </Box>
        </Flex></Link>

        {/* Body Section - BestSellers */}
        <Link to='/accessories/products'><Flex width={'80%'} marginLeft="10%" textAlign={'center'} marginTop={'3%'} gap="20px">
            <Box>
                <Image src='https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-bestseller-1672896374.gif' alt='product'></Image>
                <Text>Bestsellers</Text>
            </Box>
            <Box>
                <Image src='https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-new-arrivals-1672896378.gif' alt='product'></Image>
                <Text>New Arrivals</Text>
            </Box>
            <Box>
                <Image src='https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-hotdeals-1672896376.gif' alt='product'></Image>
                <Text>Hot Deals</Text>
            </Box>
            <Box>
                <Image src='https://images.bewakoof.com/uploads/grid/app/frame-3-delay-1s-1675323258.webp' alt='product'></Image>
                <Text>Mobile Covers</Text>
            </Box>
            <Box>
                <Image src='https://images.bewakoof.com/uploads/grid/app/frame-3-delay-1s-1675323234.webp' alt='product'></Image>
                <Text>Phone Gripper</Text>
            </Box>
            <Box>
                <Image src='https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-sliders-1672896378.gif' alt='product'></Image>
                <Text>Sliders</Text>
            </Box>
            <Box>
                <Image src='https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-caps-1672896375.gif' alt='product'></Image>
                <Text>Caps</Text>
            </Box>
            <Box>
                <Image src='https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-mugs-1672896377.gif' alt='product'></Image>
                <Text>Mugs</Text>
            </Box>
            <Box>
                <Image src='https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-collab-1672896375.gif' alt='product'></Image>
                <Text>Official Collaboration</Text>
            </Box>
        </Flex></Link>

        {/* Body Section - Trending Categories */}
        <Link to='/accessories/products'><Box marginTop={'3%'}>
            <Text fontSize={'xl'} textAlign={'center'} fontWeight='semibold'>Trending Categories</Text>
            <Flex width={'80%'} marginLeft="10%" textAlign={'center'} gap="20px">
                <Box>
                    <Image src='https://images.bewakoof.com/uploads/grid/app/category-box-Mobile-covers-1672907490.png'></Image>
                </Box>
                <Box>
                    <Image src='https://images.bewakoof.com/uploads/grid/app/category-box-flats-1673351676.jpg'></Image>
                </Box>
                <Box>
                    <Image src='https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1672907481.png'></Image>
                </Box>
                <Box>
                    <Image src='https://images.bewakoof.com/uploads/grid/app/category-box-notebooks-1672896372.jpg'></Image>
                </Box>
                <Box>
                    <Image src='https://images.bewakoof.com/uploads/grid/app/category-box-sliders-men-1672907494.png'></Image>
                </Box>
                <Box>
                    <Image src='https://images.bewakoof.com/uploads/grid/app/category-box-caps-1672907483.png'></Image>
                </Box>
            </Flex>
        </Box></Link>

        {/* Body Section - Too Hot to be missed */}
        <Link to='/accessories/products'><Box marginTop={'3%'}>
            <Text fontSize={'xl'} textAlign={'center'} fontWeight='semibold'>TOO HOT TO BE MISSED</Text>
            <Flex>
                <Image src='https://images.bewakoof.com/uploads/grid/app/hot-deals-mid-banner-1672920440.jpg' alt='product'></Image>
                <Image src='https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-CustomiseMockTee-1668416637.jpg' alt='product'></Image>
            </Flex>
        </Box></Link>

        {/* Body Section - Best Sellers */}
       <Link to='/accessories/products'> <Box>
            <Flex>
                Best Sellers.
            </Flex>
        </Box></Link>

        {/* Body Section - Best Of Bewakoof */}
        <Link to='/accessories/products'><Box marginTop={'3%'}>
        <Text fontSize={'xl'} textAlign={'center'} fontWeight='semibold'>BEST OF BEWAKOOF</Text>
            <Flex>
                <Box>
                    <Image src='https://images.bewakoof.com/uploads/grid/app/flipflops-sliders-1x1-1671701323.gif' alt='bewakoof'></Image>
                </Box>
                <Box>
                    <Image src='https://images.bewakoof.com/uploads/grid/app/static-1x1-TrendyToppers-1676223607.jpg' alt='bewakoof'></Image>
                </Box>
                <Box>
                    <Image src='https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-accessories-flats-03-1672407275.jpg' alt='bewakoof'></Image>
                </Box>
            </Flex>
        </Box></Link>

        {/* Body Section - GANGS FAVOURITE */}
        <Link to='/accessories/products'><Box marginTop={'3%'}>
        <Text fontSize={'xl'} textAlign={'center'} fontWeight='semibold'>GANG'S FAVOURITE</Text>
            <Flex>
                <Box>
                    <Image src='https://images.bewakoof.com/uploads/grid/app/characteraccessories-midsize-banner-1672896190.gif' alt='bewakoof'></Image>
                </Box>
                <Box>
                    <Image src='https://images.bewakoof.com/uploads/grid/app/zigzag-slider-1672920440.gif' alt='bewakoof'></Image>
                </Box>
            </Flex>
        </Box></Link>

        {/* Footer */}
        <Box marginTop={'1%'}>
            <Image src='https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg' alt='bewakoof'></Image>
            <Image marginTop={'1%'} src='https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg' alt='bewakoof'></Image>
        </Box>

    </Box>
  )
}

export default Accessories