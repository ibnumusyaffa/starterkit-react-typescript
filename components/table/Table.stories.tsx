import React from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/button'
import { EmptyState } from '@/components/empty-state'
import { Table, TableEmpty, Tbody, Td, Th, Thead, Tr } from '@/components/table'

const meta = {
  title: 'Data Display/Table',
  component: Table,
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {
    empty: false,
    loading: false,
    withBorder: false,
    withColumnBorders: false,
    hightlightOnHover: true,
    striped: false,
    stickyHeader: false,
    overflowXAuto: true,
    rounded: false,
    stickyOffset: 0,
  },
  render: (args) => {
    return (
      <Table {...args}>
        <Thead>
          <Tr>
            <Th className="w-10">No.</Th>
            <Th sortable columnKey="name">
              Name
            </Th>
            <Th>Title</Th>
            <Th>Email</Th>
            <Th>Birthdate</Th>
            <Th>Description</Th>
            <Th sortable columnKey="created_at">
              Created at
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...Array(10)].map((item, index) => {
            return (
              <Tr selected={index === 2} key={index}>
                <Td>{index + 1}</Td>
                <Td>Muhammad John Doe</Td>
                <Td>Software Developer</Td>
                <Td>john@example.com</Td>
                <Td>31 May 1999</Td>
                <Td>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s,
                </Td>
                <Td>20:30 09/11/2022</Td>
              </Tr>
            )
          })}
        </Tbody>
        <TableEmpty>
          <EmptyState
            withIcon
            title="No project found"
            description="Your search did not match any project. Please try again or create project."
            primaryAction={
              <Button leftIcon={<PlusIcon></PlusIcon>}>Create project</Button>
            }
            secondaryAction={<Button variant="default">Clear search</Button>}
          ></EmptyState>
        </TableEmpty>
      </Table>
    )
  },
}

export const EmptyState_: Story = {
  render: () => {
    return (
      <Table empty>
        <Thead>
          <Tr>
            <Th className="w-10">No.</Th>
            <Th sortable columnKey="name">
              Name
            </Th>
            <Th>Title</Th>
            <Th>Email</Th>
            <Th>Birthdate</Th>
            <Th>Description</Th>
            <Th sortable columnKey="created_at">
              Created at
            </Th>
          </Tr>
        </Thead>
        <Tbody></Tbody>
        <TableEmpty>
          <EmptyState
            withIcon
            title="No project found"
            description="Your search did not match any project. Please try again or create project."
            primaryAction={
              <Button leftIcon={<PlusIcon></PlusIcon>}>Create project</Button>
            }
            secondaryAction={<Button variant="default">Clear search</Button>}
          ></EmptyState>
        </TableEmpty>
      </Table>
    )
  },
}

export const LoadingWithEmptyData: Story = {
  render: () => {
    return (
      <Table loading empty>
        <Thead>
          <Tr>
            <Th className="w-10">No.</Th>
            <Th sortable columnKey="name">
              Name
            </Th>
            <Th>Title</Th>
            <Th>Email</Th>
            <Th>Birthdate</Th>
            <Th>Description</Th>
            <Th sortable columnKey="created_at">
              Created at
            </Th>
          </Tr>
        </Thead>
        <Tbody></Tbody>
        <TableEmpty>
          <EmptyState
            withIcon
            title="No project found"
            description="Your search did not match any project. Please try again or create project."
            primaryAction={
              <Button leftIcon={<PlusIcon></PlusIcon>}>Create project</Button>
            }
            secondaryAction={<Button variant="default">Clear search</Button>}
          ></EmptyState>
        </TableEmpty>
      </Table>
    )
  },
}

export const LoadingWithData: Story = {
  render: () => {
    return (
      <Table loading>
        <Thead>
          <Tr>
            <Th className="w-10">No.</Th>
            <Th sortable columnKey="name">
              Name
            </Th>
            <Th>Title</Th>
            <Th>Email</Th>
            <Th>Birthdate</Th>
            <Th>Description</Th>
            <Th sortable columnKey="created_at">
              Created at
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...Array(3)].map((item, index) => {
            return (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>Muhammad John Doe</Td>
                <Td>Software Developer</Td>
                <Td>john@example.com</Td>
                <Td>31 May 1999</Td>
                <Td>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s,
                </Td>
                <Td>20:30 09/11/2022</Td>
              </Tr>
            )
          })}
        </Tbody>
        <TableEmpty>
          <EmptyState
            withIcon
            title="No project found"
            description="Your search did not match any project. Please try again or create project."
            primaryAction={
              <Button leftIcon={<PlusIcon></PlusIcon>}>Create project</Button>
            }
            secondaryAction={<Button variant="default">Clear search</Button>}
          ></EmptyState>
        </TableEmpty>
      </Table>
    )
  },
}

export const Border: Story = {
  render: () => {
    return (
      <Table withBorder>
        <Thead>
          <Tr>
            <Th className="w-10">No.</Th>
            <Th sortable columnKey="name">
              Name
            </Th>
            <Th>Title</Th>
            <Th>Email</Th>
            <Th>Birthdate</Th>
            <Th>Description</Th>
            <Th sortable columnKey="created_at">
              Created at
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...Array(3)].map((item, index) => {
            return (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>Muhammad John Doe</Td>
                <Td>Software Developer</Td>
                <Td>john@example.com</Td>
                <Td>31 May 1999</Td>
                <Td>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s,
                </Td>
                <Td>20:30 09/11/2022</Td>
              </Tr>
            )
          })}
        </Tbody>
        <TableEmpty>
          <EmptyState
            withIcon
            title="No project found"
            description="Your search did not match any project. Please try again or create project."
            primaryAction={
              <Button leftIcon={<PlusIcon></PlusIcon>}>Create project</Button>
            }
            secondaryAction={<Button variant="default">Clear search</Button>}
          ></EmptyState>
        </TableEmpty>
      </Table>
    )
  },
}

export const BorderRounded: Story = {
  render: () => {
    return (
      <Table withBorder rounded>
        <Thead>
          <Tr>
            <Th className="w-10">No.</Th>
            <Th sortable columnKey="name">
              Name
            </Th>
            <Th>Title</Th>
            <Th>Email</Th>
            <Th>Birthdate</Th>
            <Th>Description</Th>
            <Th sortable columnKey="created_at">
              Created at
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...Array(3)].map((item, index) => {
            return (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>Muhammad John Doe</Td>
                <Td>Software Developer</Td>
                <Td>john@example.com</Td>
                <Td>31 May 1999</Td>
                <Td>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s,
                </Td>
                <Td>20:30 09/11/2022</Td>
              </Tr>
            )
          })}
        </Tbody>
        <TableEmpty>
          <EmptyState
            withIcon
            title="No project found"
            description="Your search did not match any project. Please try again or create project."
            primaryAction={
              <Button leftIcon={<PlusIcon></PlusIcon>}>Create project</Button>
            }
            secondaryAction={<Button variant="default">Clear search</Button>}
          ></EmptyState>
        </TableEmpty>
      </Table>
    )
  },
}

export const Striped: Story = {
  render: () => {
    return (
      <Table striped>
        <Thead>
          <Tr>
            <Th className="w-10">No.</Th>
            <Th sortable columnKey="name">
              Name
            </Th>
            <Th>Title</Th>
            <Th>Email</Th>
            <Th>Birthdate</Th>
            <Th>Description</Th>
            <Th sortable columnKey="created_at">
              Created at
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...Array(8)].map((item, index) => {
            return (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>Muhammad John Doe</Td>
                <Td>Software Developer</Td>
                <Td>john@example.com</Td>
                <Td>31 May 1999</Td>
                <Td>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s,
                </Td>
                <Td>20:30 09/11/2022</Td>
              </Tr>
            )
          })}
        </Tbody>
        <TableEmpty>
          <EmptyState
            withIcon
            title="No project found"
            description="Your search did not match any project. Please try again or create project."
            primaryAction={
              <Button leftIcon={<PlusIcon></PlusIcon>}>Create project</Button>
            }
            secondaryAction={<Button variant="default">Clear search</Button>}
          ></EmptyState>
        </TableEmpty>
      </Table>
    )
  },
}

export const StickyHeader: Story = {
  render: () => {
    return (
      <Table stickyHeader overflowXAuto={false}>
        <Thead>
          <Tr>
            <Th className="w-10">No.</Th>
            <Th sortable columnKey="name">
              Name
            </Th>
            <Th>Title</Th>
            <Th>Email</Th>
            <Th>Birthdate</Th>
            <Th>Description</Th>
            <Th sortable columnKey="created_at">
              Created at
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...Array(15)].map((item, index) => {
            return (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>Muhammad John Doe</Td>
                <Td>Software Developer</Td>
                <Td>john@example.com</Td>
                <Td>31 May 1999</Td>
                <Td>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s,
                </Td>
                <Td>20:30 09/11/2022</Td>
              </Tr>
            )
          })}
        </Tbody>
        <TableEmpty>
          <EmptyState
            withIcon
            title="No project found"
            description="Your search did not match any project. Please try again or create project."
            primaryAction={
              <Button leftIcon={<PlusIcon></PlusIcon>}>Create project</Button>
            }
            secondaryAction={<Button variant="default">Clear search</Button>}
          ></EmptyState>
        </TableEmpty>
      </Table>
    )
  },
}

export const OverflowX: Story = {
  render: () => {
    return (
      <div className="w-1/2">
        <Table overflowXAuto>
          <Thead>
            <Tr>
              <Th className="w-1/2">Column 1</Th>
              <Th>Column 2</Th>
              <Th>Column 3</Th>
            </Tr>
          </Thead>
          <Tbody>
            {[...Array(3)].map((item, index) => {
              return (
                <Tr key={index}>
                  <Td>LoremIpsumissimplydummytextoftheprintingand</Td>
                  <Td>LoremIpsumissimplydummytextoftheprintingand</Td>
                  <Td>LoremIpsumissimplydummytextoftheprintingand</Td>
                </Tr>
              )
            })}
          </Tbody>
          <TableEmpty>
            <EmptyState
              withIcon
              title="No project found"
              description="Your search did not match any project. Please try again or create project."
              primaryAction={
                <Button leftIcon={<PlusIcon></PlusIcon>}>Create project</Button>
              }
              secondaryAction={<Button variant="default">Clear search</Button>}
            ></EmptyState>
          </TableEmpty>
        </Table>
      </div>
    )
  },
}
