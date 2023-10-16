import React from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'

import { Button } from '@/components/button'
import { EmptyState } from '@/components/empty-state'
import { NativeSelect } from '@/components/native-select'
import { Switch } from '@/components/switch'
import {
  Table,
  TableEmpty,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useTableSort,
  VerticalAlignment,
} from '@/components/table'

function Page() {
  const [state, setState] = React.useState({
    empty: false,
    loading: false,
    withBorder: false,
    withColumnBorders: false,
    hightlightOnHover: true,
    striped: false,
    stickyHeader: false,
    overflowXAuto: true,
  })

  const { sort, handleChangeSort } = useTableSort({
    column: 'name',
    direction: 'asc',
  })

  const [verticalAlignment, setVerticalALignment] =
    React.useState<VerticalAlignment>('center')

  return (
    <div>
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Table</div>
        <div className="text-gray-700">-</div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="flex space-x-3">
          <Switch
            checked={state.empty}
            onCheckedChange={(value) =>
              setState((prev) => ({ ...prev, empty: value }))
            }
            id="empty"
            label="empty"
          ></Switch>
        </div>
        <div className="flex space-x-3">
          <Switch
            checked={state.loading}
            onCheckedChange={(value) =>
              setState((prev) => ({ ...prev, loading: value }))
            }
            id="loading"
            label="loading"
          ></Switch>
        </div>
        <div className="flex space-x-3">
          <Switch
            checked={state.withBorder}
            onCheckedChange={(value) =>
              setState((prev) => ({ ...prev, withBorder: value }))
            }
            id="withBorder"
            label="withBorder"
          ></Switch>
        </div>
        <div className="flex space-x-3">
          <Switch
            checked={state.withColumnBorders}
            onCheckedChange={(value) =>
              setState((prev) => ({
                ...prev,
                withColumnBorders: value,
              }))
            }
            id="withColumnBorders"
            label="withColumnBorders"
          ></Switch>
        </div>
        <div className="flex space-x-3">
          <Switch
            checked={state.hightlightOnHover}
            onCheckedChange={(value) =>
              setState((prev) => ({
                ...prev,
                hightlightOnHover: value,
              }))
            }
            id="hightlightOnHover"
            label="hightlightOnHover"
          ></Switch>
        </div>
        <div className="flex space-x-3">
          <Switch
            checked={state.striped}
            onCheckedChange={(value) =>
              setState((prev) => ({ ...prev, striped: value }))
            }
            id="striped"
            label="striped"
          ></Switch>
        </div>
        <div className="flex space-x-3">
          <Switch
            checked={state.stickyHeader}
            onCheckedChange={(value) =>
              setState((prev) => ({
                ...prev,
                stickyHeader: value,
              }))
            }
            id="stickyHeader"
            label="stickyHeader"
          ></Switch>
        </div>
        <div className="flex space-x-3">
          <Switch
            checked={state.overflowXAuto}
            onCheckedChange={(value) =>
              setState((prev) => ({
                ...prev,
                overflowXAuto: value,
              }))
            }
            id="overflowXAuto"
            label="overflowXAuto"
          ></Switch>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700">verticalAlignment</label>
          <NativeSelect
            size="sm"
            value={verticalAlignment}
            onChange={(e) =>
              setVerticalALignment(e.target.value as VerticalAlignment)
            }
          >
            <option value="top">Top</option>
            <option value="center">Center</option>
            <option value="bottom">Bottom</option>
          </NativeSelect>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="w-full">
          <Table
            empty={state.empty}
            loading={state.loading}
            withBorder={state.withBorder}
            withColumnBorders={state.withColumnBorders}
            hightlightOnHover={state.hightlightOnHover}
            striped={state.striped}
            stickyHeader={state.stickyHeader}
            overflowXAuto={state.overflowXAuto}
            sort={sort}
            verticalAlignment={verticalAlignment}
            onChangeSort={handleChangeSort}
          >
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
                  <Button leftIcon={<PlusIcon></PlusIcon>}>
                    Create project
                  </Button>
                }
                secondaryAction={
                  <Button variant="default">Clear search</Button>
                }
              ></EmptyState>
            </TableEmpty>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Page
