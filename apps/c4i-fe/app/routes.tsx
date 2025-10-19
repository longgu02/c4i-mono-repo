import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./app.tsx'),
  route('about', './routes/about.tsx'),
  route('chat', './routes/chat.tsx'),
  route('milestone', './routes/milestone.tsx'),
] satisfies RouteConfig;
