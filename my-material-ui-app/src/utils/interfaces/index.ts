import { Color } from '@material-ui/lab/Alert';

export interface NewAlertProps {
  children: React.ReactNode;
  onClose: (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string | undefined
  ) => void;
  severity: Color | undefined;
}

export interface PostProps {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface AvatarProps {
  name: string;
  photo: string;
}

export interface ImageProps {
  id: number;
  image: string;
  alt: string;
}
