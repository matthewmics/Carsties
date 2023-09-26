import { useParamsStore } from '@/hooks/useParamsStore';
import { Button } from 'flowbite-react';
import React from 'react';
import { AiOutlineClockCircle, AiOutlineSortAscending } from 'react-icons/ai';
import { BsFillStopCircleFill, BsStopwatchFill } from 'react-icons/bs';
import { GiFinishLine, GiFlame } from 'react-icons/gi';

const pageSizeButtons = [4, 8, 12];

const orderButtons = [
  {
    label: 'Alphabetical',
    icon: AiOutlineSortAscending,
    value: 'make',
  },
  {
    label: 'End date',
    icon: AiOutlineClockCircle,
    value: 'endingSoon',
  },
  {
    label: 'Recently added',
    icon: BsFillStopCircleFill,
    value: 'new',
  },
];

const filterButtons = [
  {
    label: 'Live Auctions',
    icon: GiFlame,
    value: 'live',
  },
  {
    label: 'Ending < 6 hours',
    icon: GiFinishLine,
    value: 'endingSoon',
  },
  {
    label: 'Completed',
    icon: BsStopwatchFill,
    value: 'finished',
  },
];

export default function Filters() {
  const pageSize = useParamsStore((state) => state.pageSize);
  const setParams = useParamsStore((state) => state.setParams);
  const orderBy = useParamsStore((state) => state.orderBy);
  const filterBy = useParamsStore((state) => state.filterBy);

  return (
    <div className="flex justify-between items-center mb-4">

      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Filter by</span>
        <Button.Group>
          {filterButtons.map(({ label, icon: Icon, value }) => {
            return (
              <Button
                color={`${filterBy === value ? 'red' : 'gray'}`}
                key={value}
                onClick={() => setParams({ filterBy: value })}
              >
                <Icon className="mr-3 h-4 w-4" />
                {label}
              </Button>
            );
          })}
        </Button.Group>
      </div>

      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Order by</span>
        <Button.Group>
          {orderButtons.map(({ label, icon: Icon, value }) => {
            return (
              <Button
                color={`${orderBy === value ? 'red' : 'gray'}`}
                key={value}
                onClick={() => setParams({ orderBy: value })}
              >
                <Icon className="mr-3 h-4 w-4" />
                {label}
              </Button>
            );
          })}
        </Button.Group>
      </div>

      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Page size</span>
        <Button.Group>
          {pageSizeButtons.map((value, index) => {
            return (
              <Button
                key={index}
                onClick={() => setParams({ pageSize: value })}
                color={`${pageSize === value ? 'red' : 'gray'}`}
                className="focus:ring-0"
              >
                {value}
              </Button>
            );
          })}
        </Button.Group>
      </div>
    </div>
  );
}