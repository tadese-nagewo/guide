import h, { JSX } from "vhtml";
import { LayoutContext } from "../../src/models";
import ListingSection from "../../_includes/pageelements/ListingSection.11ty";
import HeroSection from "../../_includes/pageelements/HeroSection.11ty";
import {
	Channel,
	ChannelFrontmatter,
	ChannelHomepageData,
} from "../../_includes/resources/channel/ChannelModels";
import { BaseLayout } from "../../_includes/layouts/BaseLayout.11ty";
import MultiColumnSection from "../../_includes/pageelements/MultiColumnSection";

const frontmatter: ChannelFrontmatter = {
	title: "Web and JavaScript",
	subtitle:
		"Using web and JavaScript? Explore a collection of learning resources to increase your productivity and start making amazing apps faster.",
	resourceType: "channel",
	date: new Date(Date.UTC(2020, 1, 11)),
	author: "pwe",
	accent: "primary",
	icon: "fa-brands fa-js",
	hero: "/assets/webstorm-beam.svg",
	subnav: [
		{ title: "Download", url: "https://www.jetbrains.com/webstorm/" },
		{ title: "Blog", url: "https://blog.jetbrains.com/webstorm/" },
		{ title: "Docs", url: "https://www.jetbrains.com/help/" },
	],
};

class WebStormHomepage {
	data() {
		return {
			layout: "",
			...frontmatter,
		};
	}

	render(this: LayoutContext, data: ChannelHomepageData): JSX.Element {
		const channel: Channel = this.getResource(data.page.url) as Channel;
		const tips = this.getResources({
			resourceTypes: ["tip"],
			channel: channel.url,
			limit: 3,
		});

		const tutorials = this.getResources({
			resourceTypes: ["tutorial"],
			channel: channel.url,
			limit: 3,
		});

		return (
			<BaseLayout {...data}>
				<HeroSection
					title={channel.title}
					subtitle={channel.subtitle!}
					subtitleExtraClass="has-text-black"
					image={channel.hero!}
				/>
				{tips && (
					<ListingSection
						title={`Recent tips`}
						resources={tips}
						moreLink={`${channel.url}tips/`}
					/>
				)}

				<MultiColumnSection>
					<div>
						<p>
							Have you ever found a tip about how to do a specific thing in a
							JetBrains IDE faster and caught yourself thinking, “Wow, I didn’t
							know about that, I wonder what other productivity boosters I’ve
							missed?”
						</p>
						<p>
							You can find some information about such productivity boosters on
							<a href="https://twitter.com/WebStormIDE">Twitter</a> or our
							<a href="https://blog.jetbrains.com/webstorm/">product blog</a>.
							Plus, the
							<a href="https://www.jetbrains.com/help/webstorm/meet-webstorm.html">
								documentation
							</a>
							is always there to help. For those who don’t have much time to
							learn but still want to get better at what they do, we’ve created
							the WebStorm Guide. The Guide comprises a collection of bite-sized
							visual resources, organized to help spark your learning.
						</p>
						<p>
							Despite the name of the Guide,
							<strong>
								the information in it is also applicable to other JetBrains IDEs
							</strong>
							that have JavaScript support, including PyCharm Professional,
							GoLand, and IntelliJ IDEA Ultimate.
						</p>
					</div>
					<div>
						<h2>Sharing feedback and contributing</h2>
						<p>
							If you have any ideas about how to make this Guide better or want
							to share your feedback with us, feel free to fill out
							<a href="https://forms.gle/eenYd4sngtV4rQ3f7">
								this short survey
							</a>
							.
							<a href="https://github.com/jetbrains/guide/issues">
								If you want to report an issue, you can do it here
							</a>
							.
						</p>
						<p>
							The WebStorm Guide is also an open project, with
							<a href="https://github.com/jetbrains/guide">
								a repository in GitHub
							</a>
							that hosts all the content. We write all the content in Markdown
							and use Gatsby to render a static site.
							<strong style="padding-left: 0.2rem; padding-right: 0.2rem">
								We encourage you to contribute to the Guide if you have any
								ideas!
							</strong>
							Please refer to the
							<a href="https://github.com/jetbrains/guide/blob/master/README.md">
								README
							</a>
							for more information.
						</p>
					</div>
				</MultiColumnSection>

				{tutorials && (
					<ListingSection
						title={`Recent tutorials`}
						resources={tutorials}
						moreLink={`${channel.url}tutorials/`}
					/>
				)}
			</BaseLayout>
		);
	}
}

module.exports = WebStormHomepage;
