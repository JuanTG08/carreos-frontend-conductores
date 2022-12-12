import React, { useState } from "react";
import { Box, Slide, Text } from "native-base";

const Sliderd = ({ isOpen }) => {
    return (
        <Slide in={isOpen}>
            <Box
                p="40px"
                mt="4"
                bg="teal.500"
                rounded="md"
            >
                <Text>Slide</Text>
            </Box>
        </Slide>
    );
};
export default Sliderd;
