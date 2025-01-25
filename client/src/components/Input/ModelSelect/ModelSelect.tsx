import type { TConversation } from 'librechat-data-provider';
import type { TSetOption } from '~/common';

type TGoogleProps = {
  showExamples: boolean;
  isCodeChat: boolean;
};

type TSelectProps = {
  conversation: TConversation | null;
  setOption: TSetOption;
  extraProps?: TGoogleProps;
  showAbove?: boolean;
  popover?: boolean;
};

export default function ModelSelect({
  conversation,
  setOption,
  popover = false,
  showAbove = true,
}: TSelectProps) {
  if (!conversation) {
    return null;
  }

  setOption('model')('get-4o-mini');

  return null;
}
