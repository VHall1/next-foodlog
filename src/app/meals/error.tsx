"use client"; // Error components must be Client Components

import { Box, Button, Container, Heading, Text } from "@radix-ui/themes";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Container my='auto'>
      <Box py="4" className="text-center">
        <Heading>Oh, snap!</Heading>
        <Text as="p">
          Something went wrong and we couldn&apos;t retrieve your meals.
        </Text>
        <Button mt="4" onClick={() => reset()} color="lime" variant='surface'>
          Retry
        </Button>
      </Box>
    </Container>
  );
}
