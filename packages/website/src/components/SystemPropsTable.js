import React from 'react';
import * as StyledSystem from 'styled-system';
import { Box, Table, Thead, Tr, Th, Tbody, Td, Code } from '@modulz/radix';

export function SystemPropsTable({ props }) {
  return (
    <Box mb={4}>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Props</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.map(prop => (
            <Tr key={prop}>
              <Td>{prop}</Td>
              <Td>
                <Box>
                  {// eslint-disable-next-line react/forbid-foreign-prop-types
                  Object.keys(StyledSystem[prop].propTypes).map(p => (
                    <Code key={p} mr={1}>
                      {p}
                    </Code>
                  ))}
                </Box>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
