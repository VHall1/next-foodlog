import { Box, Container, Heading, Text } from "@radix-ui/themes";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Box py="4">
        <Heading>Meals</Heading>
        <Text>Invite and manage your team members.</Text>
      </Box>

      <Box mt="4">{children}</Box>
    </Container>
  );
}
