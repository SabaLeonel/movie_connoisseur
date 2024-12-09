import { SettingsIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { ThemeToggle } from "@/components/header/theme-toggle"
import { SignIn } from "@/components/auth/sign-in"
import { SignOut } from "@/components/auth/sign-out"
import { auth } from "@/server/auth";


export const SiteSettings = async () => {
	const session = await auth()

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline" size="icon" className="shrink-0">
					<SettingsIcon className="size-4" />
					<span className="sr-only">Settings</span>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="space-y-4" align="end">
				<div>
					<h5>Settings</h5>
					<div className="mt-2 space-y-2">
						{session ? (
							<>
								<Label className="text-xs text-muted-foreground">Log out of your account</Label>
								<SignOut />
							</>
						) : (
							<>
								<Label className="text-xs text-muted-foreground">Log in to your account</Label>
								<SignIn />
							</>
						)}
					</div>
					<div className="mt-4 space-y-2">
						<Label className="text-xs text-muted-foreground">Theme</Label>
						<ThemeToggle />
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
