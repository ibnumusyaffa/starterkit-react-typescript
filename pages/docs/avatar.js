import React from 'react'
import { Avatar, AvatarGroup, AvatarMore } from '@/components/avatar'
import Link from 'next/link'

function Page() {
  const src =
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Avatar</div>
        <div className="text-gray-700">-</div>
      </div>

      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Usage</div>
        <div className="space-y-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <Avatar src={src} name="Ibnu M"></Avatar>
            <div>Render image when available</div>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <Avatar name="Ibnu Musyaffa"></Avatar>
            <div>Fallback to name when image empty</div>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <Avatar></Avatar>
            <div>Fallback to icon when image & name empty</div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Size</div>
        <div className="flex space-x-5">
          <Avatar size="xs" name="xtra small"></Avatar>
          <Avatar size="sm" name="s mall"></Avatar>
          <Avatar size="md" name="medium dium"></Avatar>
          <Avatar size="lg" name="large ge"></Avatar>
          <Avatar size="xl" name="xtra large"></Avatar>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Group</div>
        <div className="flex space-x-5">
          <AvatarGroup>
            <Avatar name="xtra small"></Avatar>
            <Avatar name="s mall"></Avatar>
            <Avatar name="medium dium"></Avatar>
            <Avatar name="large ge"></Avatar>
            <Avatar name="xtra large"></Avatar>
            <AvatarMore>+4</AvatarMore>
          </AvatarGroup>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Polymorphic</div>
        <div className="flex flex-wrap gap-5">
          <div className="flex items-center space-x-4">
            <Avatar as="button" onClick={() => alert('clicked')}></Avatar>
            <div>Render as button</div>
          </div>
          <div className="flex items-center space-x-4">
            <Avatar as="a" href="http://google.com" target="_blank"></Avatar>
            <div>Render as link (a)</div>
          </div>
          <div className="flex items-center space-x-4">
            <Avatar as={Link} href="/docs/button"></Avatar>
            <div>Render as next/link</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
