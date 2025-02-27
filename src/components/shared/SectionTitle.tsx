import React from "react"
import GreaterThanUnderscoreIcon from "@site/static/icons/basic/gt-undescore-gray.svg"

const SectionTitle = ({title}: {title: string}) => {
  return (
    <div className="text-content-tiny sm:text-title-tiny text-tailCall-light-600 space-x-1 font-space-mono">
      <GreaterThanUnderscoreIcon className="h-3 sm:h-4 w-6" />
      <span>{title}</span>
    </div>
  )
}

export default SectionTitle
