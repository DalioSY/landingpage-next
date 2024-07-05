interface TypeCardFeatureSection {
  icon: string;
  title: string;
  description: string;
}

export function CardFeatureSection({ icon, title, description }: TypeCardFeatureSection) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
          <path d={icon} />
        </svg>
        <div className="space-y-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}
