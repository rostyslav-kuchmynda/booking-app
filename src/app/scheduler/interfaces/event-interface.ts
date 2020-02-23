export interface EventInterface {
  start: string;
  end: string;
  room: string;
  message?: string;
  members?: string[];
  title?: string;
  googleId?: string;
  updated?: string;
}
