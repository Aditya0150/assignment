import {
  BsTelephoneFill,
  BsFillEnvelopeFill,
  BsWhatsapp,
  BsInfo,
} from "react-icons/bs";
import { FaMobileAlt, FaUniversity, FaShare } from "react-icons/fa";
import {
  AiOutlineArrowRight,
  AiOutlineUnorderedList,
  AiFillEye,
  AiOutlineLink,
} from "react-icons/ai";
import { HiDocument } from "react-icons/hi";
import { BiSolidChevronRight } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

import {
  HomeSection,
  ContactUsTopSection,
  ContactThroughSection,
  ContactThrough,
  ContactThroughIconBg,
  ContactThroughAnchorEl,
  ContactThroughButton,
  NavbarIconBg,
  TopSection,
  NavbarSection,
  NavbarWebsiteLogo,
  NavbarLinksContainer,
  NavbarLinkItem,
  NavbarLinksDropDown,
  NavbarLinksDropDownOption,
  NavbarLink,
  TopContentSection,
  TopContentImage,
  TopContentInfo,
  TopContentHeading,
  TopContentHeadingHighlight,
  TopContentLeftSection,
  TopContentText,
  TopContentCardsContainer,
  TopContentCard,
  TopContentCardTitle,
  BreakEl,
  TopContent,
  TopContentCardButton,
  TopContentLoginSection,
  LoginSectionImage,
  LoginFormSection,
  LoginSectionButtonContainer,
  TypeOfLoginButton,
  InputContainer,
  InputLabel,
  InputBox,
  LoginButton,
  ForgotContainer,
  LoginFormInteractionButton,
  WhyOnlineStudySection,
  WhyOnlineStudyContentSection,
  WhyOnlineStudyImage,
  WhyOnlineStudyCoursesContainer,
  WhyOnlineStudyCoursesList,
  WhyOnlineStudyCourseItem,
  WhyOnlineStudyInfo,
  WhyOnlineStudyInfoTitle,
  WhyOnlineStudyInfoText,
  WhyOnlineStudyInfoTextStrong,
  BenefitsSection,
  BenefitsSectionTitle,
  BenefitsSectionTitleHighlight,
  BenefitsLists,
  BenefitsListItem,
  BenefitsItemTitle,
  BenefitsItemText,
  MobileAppSection,
  MobileAppSectionImage,
  MobileAppSectionInfo,
  MobileAppSectionTitle,
  MobileAppSectionTitleHighlight,
  MobileAppSectionText,
  MobileAppSectionButton,
  OnlineBenefitsSection,
  OnlineBenefitsContent,
  OnlineBenefitsInfo,
  OnlineBenefitsTitle,
  OnlineBenefitsTitleHighlight,
  OnlineBenefitsHrLine,
  OnlineBenefitsText,
  OnlineBenefitsList,
  OnlineBenefitsListItem,
  OnlineBenefitsImage,
  OnlineBenefitsBanner,
  OnlineBenefitsBannerInfo,
  OnlineBenefitsBannerValue,
  OnlineBenefitsBannerText,
  WeAreAboutSection,
  WeAreAboutImgContainer,
  WeAreAboutImage,
  WeAreAboutList,
  WeAreAboutInfo,
  WeAreAboutTitle,
  WeAreAboutTitleHighlight,
  WeAreAboutHrLine,
  WeAreAboutListItem,
  WeAreAboutListItemImg,
  WeAreAboutListItemInfo,
  WeAreAboutListItemValue,
  WeAreAboutListItemText,
  SubscribeUsSection,
  SubscribeUsTitle,
  SubscribeUsTitleHighlight,
  SubscribeUsInputContainer,
  SubscribeUsInputEl,
  SubscribeUsButton,
  FooterSection,
  ContactUs,
  ContactUsInfoContainer,
  ContactUsCard,
  ContactUsCardTitle,
  ContactUsCardText,
  ContactUsNavLinksList,
  ContactUsNavLinkItem,
  ContactUsNavLinksImgList,
  ContactUsNavLinkLogo,
  ContactUsHrLine,
  ContactUsThroughSection,
  ContactUsThroughList,
  ContactUsThroughListItem,
  ContactUsThroughInfo,
  ContactUsThroughTitle,
  ContactUsThroughAnchorEl,
  ContactUsThroughIconContainer,
  ContactUsThroughText,
} from "./styledComponents";
import { useState } from "react";

const benefitsList = [
  {
    id: 1,
    icon: <AiOutlineUnorderedList size="36px" />,
    title: "Task Activities",
    description:
      "Daily assignments and tasks can be easily completed through online availability of information. Subject wise homework can  be submitted online which helps students to finish their tasks online.",
  },
  {
    id: 2,
    icon: <HiDocument size="36px" />,
    title: "Exam Results",
    description:
      "Exam and assessment results of each individual student can be seen. The report cards will be generated online for each individual student.",
  },
  {
    id: 3,
    icon: <BsInfo size="36px" />,
    title: "Notice Updates",
    description:
      "The necessary announcements and updates will reach to the students and parents quickly.",
  },
  {
    id: 4,
    icon: <AiFillEye size="36px" />,
    title: "Monitoring",
    description:
      "All the essential academic and administrative tasks can be easily monitored, such as students profile, exam results, fee details, transportation details etc.",
  },
  {
    id: 5,
    icon: <AiOutlineLink size="36px" />,
    title: "Connectivity",
    description:
      "When all the information is available online, and is shared regularly with parents and students transparency will be maintained.",
  },
  {
    id: 6,
    icon: <FaShare size="30px" />,
    title: "Planning & Sharing",
    description:
      "It becomes important nowadays for students to share their thoughts and ideas, SchoolAura Smart Education Platform will provide you a perfect stage to showcase and share your brilliant ideas.",
  },
];

const weAreAboutUs = [
  {
    id: 1,
    imgUrl:
      "https://schoolaura.com/Content/new_assets/images/happy-clients/client-1.png",
    value: "108+",
    text: "Happy School",
  },
  {
    id: 2,
    imgUrl:
      "https://schoolaura.com/Content/new_assets/images/happy-clients/client-2.png",
    value: "58030+",
    text: "Students",
  },
  {
    id: 3,
    imgUrl:
      "https://schoolaura.com/Content/new_assets/images/happy-clients/client-3.png",
    value: "5360+",
    text: "Happy parents",
  },
  {
    id: 4,
    imgUrl:
      "https://schoolaura.com/Content/new_assets/images/happy-clients/client-4.png",
    value: "10+",
    text: "Happy Tutors",
  },
];

const Home = () => {
  const topContactUsSection = () => (
    <ContactUsTopSection>
      <ContactThroughSection marginleft="true">
        <ContactThrough>
          <ContactThroughIconBg>
            <BsTelephoneFill size="14px" />
          </ContactThroughIconBg>
          <ContactThroughAnchorEl href="tel:9540349392">
            +91-9540349392
          </ContactThroughAnchorEl>
        </ContactThrough>
        <ContactThrough>
          <ContactThroughIconBg>
            <BsFillEnvelopeFill size="14px" />
          </ContactThroughIconBg>
          <ContactThroughAnchorEl href="mailto:contact@schoolaura.com">
            contact@schoolaura.com
          </ContactThroughAnchorEl>
        </ContactThrough>
      </ContactThroughSection>
      <ContactThroughSection>
        <ContactThroughButton bgColor="#1bd741">
          <BsWhatsapp />
          WhatsApp
        </ContactThroughButton>

        <ContactThroughButton bgColor="#a4c639">
          <FaMobileAlt />
          Mobile App
        </ContactThroughButton>

        <ContactThroughButton bgColor="#0d1028">Login</ContactThroughButton>

        <ContactThroughButton bgColor="#0d1028">
          Registration
        </ContactThroughButton>
      </ContactThroughSection>
    </ContactUsTopSection>
  );

  const navbarLinksSection = () => (
    <NavbarSection>
      <NavbarIconBg>
        <NavbarWebsiteLogo
          src="https://schoolaura.com/Content/assets/images/logo_school.png"
          alt="website logo"
        />
      </NavbarIconBg>
      <NavbarLinksContainer>
        <NavbarLinkItem>
          <NavbarLink>Home</NavbarLink>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <NavbarLinksDropDown>
            <NavbarLinksDropDownOption>
              Exam Solutions
            </NavbarLinksDropDownOption>
            <NavbarLinksDropDownOption>
              1-st to 11th Exam
            </NavbarLinksDropDownOption>
            <NavbarLinksDropDownOption>
              Competitive Exam
            </NavbarLinksDropDownOption>
            <NavbarLinksDropDownOption>Entrance Exam</NavbarLinksDropDownOption>
          </NavbarLinksDropDown>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <NavbarLinksDropDown>
            <NavbarLinksDropDownOption>Online Study</NavbarLinksDropDownOption>
            <NavbarLinksDropDownOption>Online Study</NavbarLinksDropDownOption>
            <NavbarLinksDropDownOption>Online Study</NavbarLinksDropDownOption>
          </NavbarLinksDropDown>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <NavbarLinksDropDown>
            <NavbarLinksDropDownOption>
              Tutor Solution
            </NavbarLinksDropDownOption>
            <NavbarLinksDropDownOption>Online Study</NavbarLinksDropDownOption>
            <NavbarLinksDropDownOption>Online Study</NavbarLinksDropDownOption>
          </NavbarLinksDropDown>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <NavbarLink>Blogs</NavbarLink>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <NavbarLink>Contact Us</NavbarLink>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <ContactThroughButton bgColor="#0d1028">
            <FaUniversity />
            School Management
          </ContactThroughButton>
        </NavbarLinkItem>
      </NavbarLinksContainer>
    </NavbarSection>
  );

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const [loginType, setLoginType] = useState("student");

  const topContentSection = () => (
    <TopContentSection>
      <TopContentLeftSection>
        <TopContentImage
          src="https://schoolaura.com/Content/new_assets/images/header/header-girl-icon.png"
          alt="school"
        />
        <TopContent>
          <TopContentInfo>
            <TopContentHeading>
              BE A
              <TopContentHeadingHighlight>
                SMART STUDENT
              </TopContentHeadingHighlight>
            </TopContentHeading>
            <TopContentText>
              SchoolAura Is A Smart Education Platform
            </TopContentText>
          </TopContentInfo>
          <TopContentCardsContainer>
            <TopContentCard>
              <TopContentCardTitle>
                ENTERANCE <BreakEl />
                Solution
              </TopContentCardTitle>
              <TopContentCardButton>Exam</TopContentCardButton>
              <NavbarLink to="/courses">
                <TopContentCardButton>Course</TopContentCardButton>
              </NavbarLink>
              <TopContentCardButton nobgColor="true">
                READ MORE
                <AiOutlineArrowRight />
              </TopContentCardButton>
            </TopContentCard>
            <TopContentCard>
              <TopContentCardTitle>
                COMPETITIVE <BreakEl />
                Solution
              </TopContentCardTitle>
              <TopContentCardButton>Exam</TopContentCardButton>
              <NavbarLink to="/courses">
                <TopContentCardButton>Course</TopContentCardButton>
              </NavbarLink>
              <TopContentCardButton nobgColor="true">
                READ MORE
                <AiOutlineArrowRight />
              </TopContentCardButton>
            </TopContentCard>
            <TopContentCard>
              <TopContentCardTitle>
                KG-12<sup>TH</sup> <BreakEl />
                SCHOOL
              </TopContentCardTitle>
              <TopContentCardButton>Exam</TopContentCardButton>
              <NavbarLink to="/courses">
                <TopContentCardButton>Course</TopContentCardButton>
              </NavbarLink>
              <TopContentCardButton nobgColor="true">
                READ MORE
                <AiOutlineArrowRight />
              </TopContentCardButton>
            </TopContentCard>
            <TopContentCard>
              <TopContentCardTitle>
                TUTOR <BreakEl />
                SOLUTION
              </TopContentCardTitle>
              <TopContentCardButton>Find Tutor</TopContentCardButton>
              <TopContentCardButton>Become Tutor</TopContentCardButton>
              <TopContentCardButton nobgColor="true">
                READ MORE
                <AiOutlineArrowRight />
              </TopContentCardButton>
            </TopContentCard>
          </TopContentCardsContainer>
        </TopContent>
      </TopContentLeftSection>
      <TopContentLoginSection>
        <LoginSectionImage
          src="https://schoolaura.com/Content/new_assets/images/header/user-img.png"
          alt="login image"
        />

        <LoginSectionButtonContainer>
          <TypeOfLoginButton
            $isActive={loginType === "student"}
            onClick={() => setLoginType("student")}
          >
            Student Login
          </TypeOfLoginButton>
          <TypeOfLoginButton
            $isActive={loginType === "parent"}
            onClick={() => setLoginType("parent")}
          >
            Parents Login
          </TypeOfLoginButton>
        </LoginSectionButtonContainer>

        {loginType === "student" && (
          <>
            <LoginFormSection onSubmit={onFormSubmit}>
              <InputContainer>
                <InputLabel htmlFor="mobileNumber">
                  Mobile Number or Key
                </InputLabel>
                <InputBox type="text" id="mobileNumber" />
              </InputContainer>
              <InputContainer>
                <InputLabel htmlFor="password">Student Password</InputLabel>
                <InputBox type="password" id="password" />
              </InputContainer>
              <LoginButton type="submit">Login</LoginButton>
            </LoginFormSection>

            <ForgotContainer>
              <LoginFormInteractionButton type="button">
                Forgot Password
              </LoginFormInteractionButton>
              <LoginFormInteractionButton type="button">
                Create Account
              </LoginFormInteractionButton>
            </ForgotContainer>
          </>
        )}
        {loginType === "parent" && (
          <>
            <LoginFormSection onSubmit={onFormSubmit}>
              <InputContainer>
                <InputLabel htmlFor="mobileNumber">
                  Parent Mobile or Email
                </InputLabel>
                <InputBox type="text" id="mobileNumber" />
              </InputContainer>
              <InputContainer>
                <InputLabel htmlFor="password">Parent Password</InputLabel>
                <InputBox type="password" id="password" />
              </InputContainer>
              <LoginButton type="submit">Login</LoginButton>
            </LoginFormSection>

            <ForgotContainer>
              <LoginFormInteractionButton type="button">
                Forgot Password
              </LoginFormInteractionButton>
              <LoginFormInteractionButton type="button">
                Create Account
              </LoginFormInteractionButton>
            </ForgotContainer>
          </>
        )}
      </TopContentLoginSection>
    </TopContentSection>
  );

  const whyChooseOnlineStudy = () => (
    <WhyOnlineStudySection>
      <WhyOnlineStudyContentSection>
        <WhyOnlineStudyCoursesContainer>
          <WhyOnlineStudyCoursesList>
            <WhyOnlineStudyCourseItem>- 256 Courses</WhyOnlineStudyCourseItem>
            <WhyOnlineStudyCourseItem>
              - Expert Teachers
            </WhyOnlineStudyCourseItem>
            <WhyOnlineStudyCourseItem>
              - Online Education
            </WhyOnlineStudyCourseItem>
          </WhyOnlineStudyCoursesList>
        </WhyOnlineStudyCoursesContainer>
        <WhyOnlineStudyInfo>
          <WhyOnlineStudyInfoTitle>
            Why Online Study With SchoolAura
          </WhyOnlineStudyInfoTitle>
          <WhyOnlineStudyInfoText>
            The world is changing for the better. Because of the advancement of
            technology, geek minds have grown tired of doing more work, and
            carrying books, notebooks and how much to buy books?
          </WhyOnlineStudyInfoText>
          <BreakEl />
          <WhyOnlineStudyInfoText>
            <WhyOnlineStudyInfoTextStrong>
              Solution:
            </WhyOnlineStudyInfoTextStrong>
            Now you can find a simple solution with schoolaura. In these days
            almost everyone has a Smartphone, Tab or Laptop. So just open your
            device and start your study from anywhere anytime while you are
            travelling, sitting in the park, and etc.
          </WhyOnlineStudyInfoText>
          <BreakEl />
          <WhyOnlineStudyInfoText>
            Now Use your time and gain knowledge in every second and Use your
            device for right things not for waste your time
          </WhyOnlineStudyInfoText>
        </WhyOnlineStudyInfo>
      </WhyOnlineStudyContentSection>
      <WhyOnlineStudyImage
        src="https://schoolaura.com/Content/new_assets/images/banner-2/Layer-20.png"
        alt="online study"
      />
    </WhyOnlineStudySection>
  );

  const benefitsSection = () => (
    <BenefitsSection>
      <BenefitsSectionTitle>
        BENEFITS OF SCHOOLAURA
        <BreakEl />
        <BenefitsSectionTitleHighlight>
          FOR STUDENT
        </BenefitsSectionTitleHighlight>
      </BenefitsSectionTitle>
      <BenefitsLists>
        {benefitsList.map((each) => {
          const { id, title, icon, description } = each;

          return (
            <BenefitsListItem key={id}>
              {icon}
              <BenefitsItemTitle>{title}</BenefitsItemTitle>
              <BenefitsItemText>{description}</BenefitsItemText>
            </BenefitsListItem>
          );
        })}
      </BenefitsLists>
    </BenefitsSection>
  );

  const mobileAppSection = () => (
    <MobileAppSection>
      <MobileAppSectionImage
        src="https://schoolaura.com/Content/new_assets/images/school_aura_app.jpg"
        alt="mobile app"
      />
      <MobileAppSectionInfo>
        <MobileAppSectionTitle>
          Easy to Access with
          <MobileAppSectionTitleHighlight>
            Mobile App
          </MobileAppSectionTitleHighlight>
        </MobileAppSectionTitle>
        <MobileAppSectionText>
          If you&#39;re looking for easily accessible resources for your
          classroom, then you&#39;re in the right place. Online learning with
          the Android app is very easy to access. That&#39;s why we&#39;ve
          hand-curated the School Aura free app and website. Easy to use and
          learn!
        </MobileAppSectionText>
        <BreakEl />
        <MobileAppSectionText>
          To learn online, you need to be reasonably comfortable with Smart
          Mobile Phone, Tab, Laptops, and the internet. The advantage of
          learning online via an android app is that you can pause the
          video/audio whenever you need to take notes or simply absorb what has
          been said. Another fantastic feature of online learning is that you
          can re-listen to different parts as needed, which is something you
          can&#39;t do in a live lecture!
        </MobileAppSectionText>
        <NavbarLink to="/">
          <MobileAppSectionButton>Download Now</MobileAppSectionButton>
        </NavbarLink>
      </MobileAppSectionInfo>
    </MobileAppSection>
  );

  const onlineBenefitsSection = () => (
    <OnlineBenefitsSection>
      <OnlineBenefitsContent>
        <OnlineBenefitsInfo>
          <OnlineBenefitsTitle>
            Benefits of <BreakEl />
            <OnlineBenefitsTitleHighlight>
              Online Education
            </OnlineBenefitsTitleHighlight>
          </OnlineBenefitsTitle>
          <OnlineBenefitsHrLine />
          <BreakEl />
          <OnlineBenefitsText>
            Online Education increases engagement by adding a human element.
            Studying in the comfort of your own home is convenient, but there
            are various other advantages of online study. It&#39;s especially
            beneficial for students who aren&#39;t as self-sufficient or who are
            used to the traditional educational model of &apos;teacher and
            class.&apos;
          </OnlineBenefitsText>
          <OnlineBenefitsList>
            <OnlineBenefitsListItem>
              Time and Location Flexibility
            </OnlineBenefitsListItem>
            <OnlineBenefitsListItem>
              Find Unlimited Course Category
            </OnlineBenefitsListItem>
            <OnlineBenefitsListItem>
              No Need to Carry Books
            </OnlineBenefitsListItem>
            <OnlineBenefitsListItem>
              Get Access in any mobile, Tab, Laptop with your credential
            </OnlineBenefitsListItem>
            <OnlineBenefitsListItem>
              Use your time when you are traveling, Outing and free time
            </OnlineBenefitsListItem>
            <OnlineBenefitsListItem>
              Exam Practice before exam
            </OnlineBenefitsListItem>
          </OnlineBenefitsList>
        </OnlineBenefitsInfo>
        <OnlineBenefitsImage
          src="https://schoolaura.com/Content/new_assets/images/spreading/spreading.png"
          alt="online benefits image"
        />
      </OnlineBenefitsContent>
      <OnlineBenefitsBanner>
        <OnlineBenefitsBannerInfo>
          <OnlineBenefitsBannerValue>10000+</OnlineBenefitsBannerValue>
          <OnlineBenefitsBannerText>Total Exams</OnlineBenefitsBannerText>
        </OnlineBenefitsBannerInfo>
        <OnlineBenefitsBannerInfo>
          <OnlineBenefitsBannerValue>600+</OnlineBenefitsBannerValue>
          <OnlineBenefitsBannerText>Courses</OnlineBenefitsBannerText>
        </OnlineBenefitsBannerInfo>
        <OnlineBenefitsBannerInfo>
          <OnlineBenefitsBannerValue>3000+</OnlineBenefitsBannerValue>
          <OnlineBenefitsBannerText>Success Stories</OnlineBenefitsBannerText>
        </OnlineBenefitsBannerInfo>
        <OnlineBenefitsBannerInfo>
          <OnlineBenefitsBannerValue>4.5/5</OnlineBenefitsBannerValue>
          <OnlineBenefitsBannerText>Rating</OnlineBenefitsBannerText>
        </OnlineBenefitsBannerInfo>
      </OnlineBenefitsBanner>
    </OnlineBenefitsSection>
  );

  const weAreAboutUsSection = () => (
    <WeAreAboutSection>
      <WeAreAboutImgContainer>
        <WeAreAboutImage
          src="https://schoolaura.com/Content/new_assets/images/happy-clients/client.png"
          alt="we are image"
        />
      </WeAreAboutImgContainer>
      <WeAreAboutInfo>
        <WeAreAboutTitle>
          WE <BreakEl />
          <WeAreAboutTitleHighlight>ARE SPREADING</WeAreAboutTitleHighlight>
        </WeAreAboutTitle>
        <WeAreAboutHrLine />
        <WeAreAboutList>
          {weAreAboutUs.map((each) => {
            const { id, imgUrl, value, text } = each;

            return (
              <WeAreAboutListItem key={id}>
                <WeAreAboutListItemImg src={imgUrl} alt="happy clients" />
                <WeAreAboutListItemInfo>
                  <WeAreAboutListItemValue>{value}</WeAreAboutListItemValue>
                  <WeAreAboutListItemText>{text}</WeAreAboutListItemText>
                </WeAreAboutListItemInfo>
              </WeAreAboutListItem>
            );
          })}
        </WeAreAboutList>
      </WeAreAboutInfo>
    </WeAreAboutSection>
  );

  const subscribeUsSection = () => (
    <SubscribeUsSection>
      <SubscribeUsTitle>
        SUBSCRIBE OUR
        <BreakEl />
        <SubscribeUsTitleHighlight>NEWSLETTER</SubscribeUsTitleHighlight>
      </SubscribeUsTitle>
      <SubscribeUsInputContainer>
        <SubscribeUsInputEl type="email" placeholder="Email Address" />
        <SubscribeUsButton type="button">Subscribe</SubscribeUsButton>
      </SubscribeUsInputContainer>
    </SubscribeUsSection>
  );

  const footerSection = () => (
    <FooterSection>
      <ContactUs>
        <ContactUsInfoContainer>
          <ContactUsCard>
            <ContactUsCardTitle>About Us</ContactUsCardTitle>
            <ContactUsCardText>
              SchoolAura Smart Education Platform is a step towards making
              learning better and effective for the students and help to
              acheiving their goals.
            </ContactUsCardText>
          </ContactUsCard>
          <ContactUsCard>
            <ContactUsCardTitle>Quick Links</ContactUsCardTitle>
            <ContactUsNavLinksList>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                About Us
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Benefits
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Blogs
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Testimonials
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Features
              </ContactUsNavLinkItem>
            </ContactUsNavLinksList>
          </ContactUsCard>
          <ContactUsCard>
            <ContactUsCardTitle>Help & Support</ContactUsCardTitle>
            <ContactUsNavLinksList>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Services
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Support
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Terms & Condition
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Privacy Policy
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Sitemap
              </ContactUsNavLinkItem>
            </ContactUsNavLinksList>
          </ContactUsCard>
          <ContactUsCard>
            <ContactUsCardTitle>Follow Us</ContactUsCardTitle>
            <ContactUsNavLinksImgList>
              <ContactUsNavLinkItem>
                <NavbarLink to="/">
                  <ContactUsNavLinkLogo
                    src="	https://schoolaura.com/Content/new_assets/images/footer-icon/fb.png"
                    alt="facebook logo"
                  />
                </NavbarLink>
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <NavbarLink to="/">
                  <ContactUsNavLinkLogo
                    src="	https://schoolaura.com/Content/new_assets/images/footer-icon/insta.png"
                    alt="facebook logo"
                  />
                </NavbarLink>
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <NavbarLink to="/">
                  <ContactUsNavLinkLogo
                    src="	https://schoolaura.com/Content/new_assets/images/footer-icon/twitter.png"
                    alt="facebook logo"
                  />
                </NavbarLink>
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <NavbarLink to="/">
                  <ContactUsNavLinkLogo
                    src="	https://schoolaura.com/Content/new_assets/images/footer-icon/whatsapp.png"
                    alt="facebook logo"
                  />
                </NavbarLink>
              </ContactUsNavLinkItem>
            </ContactUsNavLinksImgList>
          </ContactUsCard>
        </ContactUsInfoContainer>
        <ContactUsHrLine />
        <ContactUsThroughSection>
          <ContactUsThroughList>
            <ContactUsThroughListItem>
              <ContactUsThroughIconContainer>
                <BsTelephoneFill size="22px" />
              </ContactUsThroughIconContainer>
              <ContactUsThroughInfo>
                <ContactUsThroughTitle>CALL US</ContactUsThroughTitle>
                <ContactUsThroughAnchorEl href="tel:9540349392">
                  +91-9540349392
                </ContactUsThroughAnchorEl>
              </ContactUsThroughInfo>
            </ContactUsThroughListItem>
            <ContactUsThroughListItem>
              <ContactUsThroughIconContainer>
                <BsFillEnvelopeFill size="22px" />
              </ContactUsThroughIconContainer>
              <ContactUsThroughInfo>
                <ContactUsThroughTitle>MAIL US</ContactUsThroughTitle>
                <ContactUsThroughAnchorEl href="mailto:contact@schoolaura.com">
                  contact@schoolaura.com
                </ContactUsThroughAnchorEl>
              </ContactUsThroughInfo>
            </ContactUsThroughListItem>
            <ContactUsThroughListItem>
              <ContactUsThroughIconContainer>
                <MdLocationOn size="22px" />
              </ContactUsThroughIconContainer>
              <ContactUsThroughInfo>
                <ContactUsThroughTitle>OFFICE ADDRESS</ContactUsThroughTitle>
                <ContactUsThroughText>
                  E 44/3, Pocket D, Okhla Phase II,
                  <BreakEl /> Okhla Industrial Area, New Delhi,
                  <BreakEl /> Delhi 110020, India
                </ContactUsThroughText>
              </ContactUsThroughInfo>
            </ContactUsThroughListItem>
          </ContactUsThroughList>
        </ContactUsThroughSection>
      </ContactUs>
    </FooterSection>
  );

  return (
    <HomeSection>
      {topContactUsSection()}
      <TopSection>
        {navbarLinksSection()}
        {topContentSection()}
        {/* <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#"
            fillOpacity="1"
            d="M0,256L60,234.7C120,213,240,171,360,149.3C480,128,600,128,720,154.7C840,181,960,235,1080,245.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg> */}

        
    <svg
      id="wave"
      style={{ transform: "rotate(0deg)", transition: "0.3s" }}
      viewBox="0 0 1440 110"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stopColor="rgba(243, 106, 62, 1)" offset="0%" />
          <stop stopColor="rgba(255, 179, 11, 1)" offset="100%" />
        </linearGradient>
      </defs>
      <path
        style={{ transform: "translate(0, 0px)", opacity: 1 }}
        fill="#ffffff"
        d="M0,11L60,20.2C120,29,240,48,360,62.3C480,77,600,88,720,77C840,66,960,33,1080,33C1200,33,1320,66,1440,77C1560,88,1680,77,1800,75.2C1920,73,2040,81,2160,80.7C2280,81,2400,73,2520,69.7C2640,66,2760,66,2880,56.8C3000,48,3120,29,3240,23.8C3360,18,3480,26,3600,34.8C3720,44,3840,55,3960,51.3C4080,48,4200,29,4320,29.3C4440,29,4560,48,4680,53.2C4800,59,4920,51,5040,45.8C5160,40,5280,37,5400,40.3C5520,44,5640,55,5760,58.7C5880,62,6000,59,6120,51.3C6240,44,6360,33,6480,31.2C6600,29,6720,37,6840,44C6960,51,7080,59,7200,56.8C7320,55,7440,44,7560,45.8C7680,48,7800,62,7920,69.7C8040,77,8160,77,8280,71.5C8400,66,8520,55,8580,49.5L8640,44L8640,110L8580,110C8520,110,8400,110,8280,110C8160,110,8040,110,7920,110C7800,110,7680,110,7560,110C7440,110,7320,110,7200,110C7080,110,6960,110,6840,110C6720,110,6600,110,6480,110C6360,110,6240,110,6120,110C6000,110,5880,110,5760,110C5640,110,5520,110,5400,110C5280,110,5160,110,5040,110C4920,110,4800,110,4680,110C4560,110,4440,110,4320,110C4200,110,4080,110,3960,110C3840,110,3720,110,3600,110C3480,110,3360,110,3240,110C3120,110,3000,110,2880,110C2760,110,2640,110,2520,110C2400,110,2280,110,2160,110C2040,110,1920,110,1800,110C1680,110,1560,110,1440,110C1320,110,1200,110,1080,110C960,110,840,110,720,110C600,110,480,110,360,110C240,110,120,110,60,110L0,110Z"
      ></path>
    </svg>
      </TopSection>
      {whyChooseOnlineStudy()}
      {benefitsSection()}
      {mobileAppSection()}
      {onlineBenefitsSection()}
      {weAreAboutUsSection()}
      {subscribeUsSection()}
      {footerSection()}
    </HomeSection>
  );
};

export default Home;
