import { Text, View } from 'react-native';

function Card({
  children,
  className = 'border px-5 py-4 rounded-xl dark:border-gray-700',
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <View className={className}>{children}</View>;
}

function CardHeader({
  children,
  className,
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <View className={className}>{children}</View>;
}

function CardTitle({
  children,
  className = 'text-2xl font-semibold tracking-tight text-black dark:text-white',
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <Text className={className}>{children}</Text>;
}

function CardDescription({
  children,
  className = 'text-sm text-gray-700 dark:text-gray-400',
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <Text className={className}>{children}</Text>;
}

function CardContent({
  children,
  className = 'py-4',
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <View className={className}>{children}</View>;
}

function CardFooter({
  children,
  className,
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <View className={className}>{children}</View>;
}

interface SimpleCardProps {
  className?: string;
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
}
function SimpleCard({
  className = 'px-5 py-4 rounded-lg border shadow-sm dark:border-gray-700',
  title,
  description,
  content,
  footer,
}: SimpleCardProps) {
  return (
    <View className={className}>
      <View>
        {title && (
          <Text className="text-2xl font-semibold tracking-tight text-black dark:text-white">
            {title}
          </Text>
        )}
        {description && (
          <Text className="text-sm text-gray-700 dark:text-gray-400">
            {description}
          </Text>
        )}
      </View>
      {content && (
        <View className="py-4">
          <Text className="text-base text-black dark:text-white">
            {content}
          </Text>
        </View>
      )}
      {footer && (
        <Text className="text-sm text-gray-700 dark:text-gray-400">
          {footer}
        </Text>
      )}
    </View>
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  SimpleCard,
};
