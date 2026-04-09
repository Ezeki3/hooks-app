import { memo } from "react";

interface TitleProps {
  title: string
}

export const MyTitle = memo(({ title }: TitleProps) => {
  console.log('my title re-render');

  return (
    <h1 className="text-3xl">{title}</h1>
  )
})
