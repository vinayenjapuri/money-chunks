import {Component, OnInit} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {FlexModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {delay, of, switchMap} from "rxjs";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDividerModule} from "@angular/material/divider";
import { filter } from 'lodash';
import {MatIconModule} from "@angular/material/icon";
import {InputComponent} from "../../shared/components/input/input.component";

export interface Faq {
  question: string;
  answer: string;
}
@Component({
  selector: 'mc-faq',
  standalone: true,
  imports: [
    MatExpansionModule,
    FlexModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDividerModule,
    MatIconModule,
    InputComponent
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {
  faqContents: Faq[] = [
    {
      question: 'How does Money Chunks work?',
      answer: 'Money Chunks is a platform where users can earn passive income by watching ads. Simply sign up, browse through our selection of video and banner ads, watch them, and earn coins.'
    },
    {
      question: 'What types of ads can I expect to see on Money Chunks?',
      answer: 'We offer a variety of ads, including video ads and banner ads. These ads cover a range of topics and interests, ensuring there\'s something for everyone.'
    },
    {
      question: 'How much money can I earn by watching ads on Money Chunks?',
      answer: 'The amount of money you can earn varies depending on factors such as ad duration and advertiser rates. Additionally, we offer faucets that dispense coins every 5 minutes, allowing you to earn even more throughout the day.'
    },
    {
      question: 'When can I cash out my earnings?',
      answer: 'You can cash out your earnings once you reach a minimum of 1200 coins. At that point, you can choose your preferred payout method, such as Paytm wallet or other options.'
    },
    {
      question: 'Are there any restrictions on who can use Money Chunks?',
      answer: 'Users must be residents of the country where Money Chunks operates to participate. Additionally, users must adhere to our terms and conditions to use the platform.'
    },
    {
      question: 'Is my personal information safe with Money Chunks?',
      answer: 'Yes, we take your security and privacy seriously. We do not store any sensitive bank information in our databases, and we do not ask for OTPs or other sensitive personal information.'
    },
    {
      question: 'Can I use Money Chunks on multiple devices?',
      answer: 'Yes, you can access Money Chunks from multiple devices. However, please note that earnings are tied to your account, so you won\'t be able to earn more by using multiple accounts.'
    },
    {
      question: 'What should I do if I encounter a problem with the platform?',
      answer: 'If you encounter any issues while using Money Chunks, please reach out to our customer support team. We\'re here to help resolve any problems and ensure you have a smooth experience.'
    },
    {
      question: 'How often can I watch ads on Money Chunks?',
      answer: 'You can watch up to 15 video ads and 30 banner ads per day on Money Chunks. Additionally, we offer faucets that dispense coins every 5 minutes, providing you with more opportunities to earn throughout the day.'
    },
    {
      question: 'Are there any fees or charges for using Money Chunks?',
      answer: 'No, there are no fees or charges for using Money Chunks. You can sign up for free and start earning money by watching ads.'
    },
    {
      question: 'Can I refer friends to Money Chunks and earn additional rewards?',
      answer: 'Yes, we offer a referral program where you can earn additional rewards by referring friends to Money Chunks. When your referrals sign up and start earning, you\'ll receive bonus coins as a reward.'
    },
    {
      question: 'What happens if I don\'t reach the minimum payout threshold?',
      answer: 'If you don\'t reach the minimum payout threshold of 1200 coins, your earnings will remain in your account until you reach the threshold. You can continue watching ads and earning coins until you\'re ready to cash out.'
    },
    {
      question: 'How long does it take to receive my payout after requesting it?',
      answer: 'Payouts are processed promptly after you request them, typically within a few business days. However, the exact time may vary depending on your chosen payout method and other factors.'
    },
    {
      question: 'Is there a limit to how much I can earn on Money Chunks?',
      answer: 'There is no set limit to how much you can earn on Money Chunks. Your earnings depend on factors such as the number of ads you watch and the rates set by advertisers. The more you engage with the platform, the more you can potentially earn.'
    },
    {
      question: 'Is Money Chunks available on mobile devices?',
      answer: 'Yes, Money Chunks is accessible on both desktop and mobile devices. You can watch ads and earn money from the convenience of your smartphone or tablet, making it easy to earn passive income on the go.'
    },
    {
      question: 'Can I watch the same ad multiple times to earn more coins?',
      answer: 'No, you cannot watch the same ad multiple times to earn additional coins. Our system ensures fair earning opportunities by limiting the number of times you can view each ad.'
    },
    {
      question: 'Are there any age restrictions for using Money Chunks?',
      answer: 'Yes, users must be at least 18 years old to participate in Money Chunks. This is to ensure compliance with legal regulations regarding online earnings and advertisements.'
    },
    {
      question: 'What happens if I encounter an ad that is inappropriate or offensive?',
      answer: 'If you come across an ad that you find inappropriate or offensive, please report it to our customer support team immediately. We take user feedback seriously and will take appropriate action to address the issue.'
    },
    {
      question: 'Can I use ad-blocking software while using Money Chunks?',
      answer: 'No, using ad-blocking software while using Money Chunks is not allowed. Our platform relies on displaying ads to generate revenue, which in turn allows us to reward users for their engagement. Using ad-blocking software may result in account suspension or termination.'
    },
    {
      question: 'Is there a limit to how many accounts I can have on Money Chunks?',
      answer: 'Yes, users are limited to one account per person on Money Chunks. Creating multiple accounts is strictly prohibited and may result in the suspension or termination of all associated accounts.'
    },
    {
      question: 'What happens to my earnings if I close my Money Chunks account?',
      answer: 'If you choose to close your Money Chunks account, any remaining earnings in your account will be forfeited. We recommend cashing out your earnings before closing your account to ensure you receive your rewards.'
    },
    {
      question: 'How can I stay updated on new features and promotions on Money Chunks?',
      answer: 'You can stay updated on new features, promotions, and announcements by following us on our social media channels or subscribing to our newsletter. We regularly post updates to keep our users informed about exciting opportunities to earn more.'
    }
  ];
  faqControl = new FormControl<string | null>(null);
  searchedFaqContent: Faq[] = this.faqContents;
  showLoadingContent: boolean = false;

  ngOnInit(): void {
    this.faqControl.valueChanges.pipe(switchMap((input) => {
      this.showLoadingContent = true;
      return input ? of(input): of(null);
    })).subscribe((value) => {
      if (value && value.trim()?.length) {
        this.searchedFaqContent = filter(this.faqContents, (f) => (f.question?.toLowerCase()?.indexOf(<string>value?.toString()) > -1) || (f.answer?.toLowerCase()?.indexOf(<string>value?.toString()) > -1));
      } else {
        this.faqControl.patchValue(null, {emitEvent: false, emitModelToViewChange: true})
        this.searchedFaqContent = this.faqContents;
      }
      setTimeout(() => {
        this.showLoadingContent = false;
      }, 500);
    });
  }
  onSearch() {}
}
