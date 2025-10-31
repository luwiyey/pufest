
import { battleOfTheBandsLeaderboard, cosplayLeaderboard, LeaderboardEntry } from '@/lib/data';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Star, Guitar } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Leaderboard | Panpacific Festival",
  description: "Check out the final results and top rankings for the Battle of the Bands and Cosplay Competition from the Panpacific Festival 2025.",
};

const LeaderboardTable = ({ data, contestName, icon: Icon }: { data: LeaderboardEntry[], contestName: string, icon: React.ElementType }) => (
    <Card className="shadow-lg animate-fade-in-up transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.primary/30%)] hover:-translate-y-2">
        <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                <div className="w-12 h-12 bg-green-950 text-green-400 rounded-full flex items-center justify-center border border-green-700 animate-float">
                    <Icon className="w-6 h-6" />
                </div>
                {contestName}
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[80px]">Rank</TableHead>
                        <TableHead>Contestant</TableHead>
                        <TableHead className="text-right">Score</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((entry) => (
                        <TableRow key={entry.rank} className={entry.rank === 1 ? 'bg-green-500/10 font-bold' : ''}>
                            <TableCell className="flex items-center gap-2">
                                {entry.rank === 1 && <Trophy className="w-5 h-5 text-green-400" />}
                                {entry.rank}
                            </TableCell>
                            <TableCell>{entry.name}</TableCell>
                            <TableCell className="text-right flex items-center justify-end gap-1">
                                {entry.score.toFixed(1)} <Star className="w-4 h-4 text-green-400" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
)

export default function LeaderboardPage() {
  return (
    <div className="page-background">
      <div className="container mx-auto px-4 py-32 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground font-headline animate-fade-in hover:text-primary transition-all duration-300 cursor-default glitch" data-text="Final Leaderboard">
            Final Leaderboard
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
            The results are in! Here are the final standings for our main competitions from Panpacific Festival 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div style={{ animationDelay: '0.4s' }}>
                <LeaderboardTable data={battleOfTheBandsLeaderboard} contestName="Battle of the Bands" icon={Guitar} />
            </div>
            <div style={{ animationDelay: '0.6s' }}>
                <LeaderboardTable data={cosplayLeaderboard} contestName="Cosplay Competition" icon={Trophy} />
            </div>
        </div>
      </div>
    </div>
  );
}
