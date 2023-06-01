import React from 'react'
import {
  XMarkIcon,
  PaperAirplaneIcon,
  CheckIcon,
  ChatBubbleBottomCenterTextIcon,
  ClipboardDocumentIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'
import {
  Timeline,
  TimelineBullet,
  TimelineItem,
  TimelineContent,
} from '@/components/timeline'

function Page() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Timeline</div>
        <div className="text-gray-700">-</div>
      </div>
      <Timeline>
        <TimelineItem>
          <TimelineBullet>
            <ClipboardDocumentIcon className="h-4 w-4"></ClipboardDocumentIcon>
          </TimelineBullet>
          <TimelineContent>
            <div className="font-semibold">New Branch</div>
            <div>You created new branch fix-notifications from master</div>
            <div>2 hours ago</div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineBullet>
            <PencilSquareIcon className="h-4 w-4"></PencilSquareIcon>
          </TimelineBullet>
          <TimelineContent>
            <div className="font-semibold">Commits</div>
            <div>You ve pushed 23 commits to fix-notifications branch</div>
            <div>2 hours ago</div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineBullet>
            <PaperAirplaneIcon className="h-4 w-4"></PaperAirplaneIcon>
          </TimelineBullet>
          <TimelineContent>
            <span className="font-semibold">John Doe</span> requested review
            from <span className="font-semibold">Mark</span> 18 hours ago
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineBullet>
            <ChatBubbleBottomCenterTextIcon className="h-4 w-4"></ChatBubbleBottomCenterTextIcon>
          </TimelineBullet>
          <TimelineContent>
            <span className="font-semibold">John Doe</span> commented in merge
            request 18 hours ago
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineBullet color="danger">
            <XMarkIcon className="h-4 w-4"></XMarkIcon>
          </TimelineBullet>
          <TimelineContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineBullet color="success">
            <CheckIcon className="h-4 w-4"></CheckIcon>
          </TimelineBullet>
          <TimelineContent>
            <span className="font-semibold">John Doe </span> merged 12 hours ago
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}

export default Page
