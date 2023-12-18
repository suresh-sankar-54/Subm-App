import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage}>
      <View style={styles.body}>
        <View style={styles.body1}>
          <View style={styles.body1}>
            <View style={styles.helloNotification}>
              <View style={styles.profileImgParent}>
                <View style={styles.profileImg}>
                  <Image
                    style={styles.profileImgChild}
                    contentFit="cover"
                    source={require("../assets/ellipse-20.png")}
                  />
                  <Image
                    style={styles.profileImgItem}
                    contentFit="cover"
                    source={require("../assets/ellipse-21.png")}
                  />
                </View>
                <Text style={[styles.helloSuresh, styles.subscriptionFlexBox]}>
                  <Text style={styles.helloSureshTxtContainer}>
                    <Text style={styles.hello}>
                      <Text style={styles.hello1}>Hello,</Text>
                      <Text style={styles.text}>{` `}</Text>
                    </Text>
                    <Text style={styles.suresh}>Suresh!</Text>
                  </Text>
                </Text>
              </View>
              <Pressable
                style={[styles.vuesaxlinearnotification, styles.homeIconLayout]}
                onPress={() => {}}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/vuesaxlinearnotification.png")}
                />
              </Pressable>
            </View>
            <View style={styles.insightsBx}>
              <View>
                <View style={styles.totalCtaParent}>
                  <View style={styles.totalCta}>
                    <Text style={[styles.total, styles.payTypo]}>Total</Text>
                  </View>
                  <View style={styles.pendingCta}>
                    <Text style={styles.pending}>Pending</Text>
                  </View>
                  <View style={styles.pendingCta}>
                    <Text style={styles.pending}>Paid</Text>
                  </View>
                </View>
                <View style={[styles.frameGroup, styles.groupFlexBox]}>
                  <View>
                    <Text style={styles.text1}>₹ 499</Text>
                    <Text style={styles.totalExpectedSpend}>
                      Total expected spend
                    </Text>
                  </View>
                  <Pressable
                    style={[
                      styles.viewInsightsWrapper,
                      styles.payCtaSpaceBlock,
                    ]}
                    onPress={() => navigation.navigate("Insights")}
                  >
                    <Text style={[styles.total, styles.payTypo]}>
                      View Insights
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.paySubscriptionBx}>
            <Text style={[styles.paySubscription, styles.subscriptionFlexBox]}>
              Pay Subscription
            </Text>
            <View style={styles.appsGrp}>
              <View style={[styles.netflixBx, styles.payCtaFlexBox]}>
                <View style={styles.profileImgParent}>
                  <View style={styles.profileImg}>
                    <View
                      style={[styles.frameChild, styles.frameChildLayout]}
                    />
                    <Image
                      style={[styles.netflixSymbolRgbIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/netflix-symbol-rgb.png")}
                    />
                  </View>
                  <View style={styles.netflixParent}>
                    <Text style={[styles.netflix, styles.text2Typo]}>
                      Netflix
                    </Text>
                    <Text style={[styles.daysLeft, styles.dueTypo]}>
                      4 DAYS LEFT
                    </Text>
                  </View>
                </View>
                <Pressable
                  style={[styles.payCta, styles.payCtaFlexBox]}
                  onPress={() => {}}
                >
                  <Text style={[styles.pay, styles.payTypo]}>PAY</Text>
                </Pressable>
              </View>
              <View style={[styles.spotifyBx, styles.payCtaFlexBox]}>
                <View style={styles.profileImgParent}>
                  <View style={styles.profileImg}>
                    <View style={[styles.frameItem, styles.frameChildLayout]} />
                    <Image
                      style={[styles.spotify1Icon, styles.iconPosition]}
                      contentFit="cover"
                      source={require("../assets/spotify-1.png")}
                    />
                  </View>
                  <View style={styles.netflixParent}>
                    <Text style={[styles.netflix, styles.text2Typo]}>
                      Spotify
                    </Text>
                    <Text style={[styles.daysLeft, styles.dueTypo]}>
                      5 DAYS LEFT
                    </Text>
                  </View>
                </View>
                <View style={[styles.payCta, styles.payCtaFlexBox]}>
                  <Text style={[styles.pay, styles.payTypo]}>PAY</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.body2}>
          <Text style={[styles.activeSubscription, styles.subscriptionFlexBox]}>
            Active Subscription
          </Text>
          <View style={styles.appsGrp}>
            <View style={[styles.primeBx, styles.payCtaFlexBox]}>
              <View style={styles.profileImgParent}>
                <View style={styles.profileImg}>
                  <View style={[styles.frameInner, styles.frameChildLayout]} />
                  <Image
                    style={[styles.spotify1Icon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/unnamed-1.png")}
                  />
                </View>
                <View style={styles.netflixParent}>
                  <Text style={[styles.amazonPrime, styles.text2Typo]}>
                    Amazon Prime
                  </Text>
                  <Text style={[styles.daysLeft, styles.dueTypo]}>
                    Entertainment
                  </Text>
                </View>
              </View>
              <View style={[styles.priceDueGrp, styles.priceFlexBox]}>
                <View style={[styles.group, styles.groupFlexBox]}>
                  <Text style={[styles.text2, styles.addLayout]}>₹ 599</Text>
                  <Text style={[styles.due01122023, styles.dueTypo]}>
                    Due: 01/12/2023
                  </Text>
                </View>
                <Image
                  style={styles.vuesaxlineararrowRightIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxlineararrowright.png")}
                />
              </View>
            </View>
            <View style={[styles.tnebBx, styles.payCtaFlexBox]}>
              <View style={styles.profileImgParent}>
                <View style={styles.profileImg}>
                  <View
                    style={[styles.rectangleView, styles.frameChildLayout]}
                  />
                  <Image
                    style={[styles.spotify1Icon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/tneb-1.png")}
                  />
                </View>
                <View style={styles.netflixParent}>
                  <Text style={[styles.amazonPrime, styles.text2Typo]}>
                    TNEB
                  </Text>
                  <Text style={[styles.daysLeft, styles.dueTypo]}>Utility</Text>
                </View>
              </View>
              <View style={[styles.priceDueGrp, styles.priceFlexBox]}>
                <View style={[styles.group, styles.groupFlexBox]}>
                  <Text style={[styles.text2, styles.addLayout]}>₹ 499</Text>
                  <Text style={[styles.due01092023, styles.dueTypo]}>
                    Due: 01/09/2023
                  </Text>
                </View>
                <Image
                  style={styles.vuesaxlineararrowRightIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxlineararrowright.png")}
                />
              </View>
            </View>
            <View style={[styles.tnebBx, styles.payCtaFlexBox]}>
              <View style={styles.profileImgParent}>
                <View style={styles.profileImg}>
                  <View style={[styles.frameChild1, styles.frameChildLayout]} />
                  <Image
                    style={styles.iconPosition}
                    contentFit="cover"
                    source={require("../assets/jio-2.png")}
                  />
                </View>
                <View style={styles.netflixParent}>
                  <Text style={[styles.amazonPrime, styles.text2Typo]}>
                    Jio
                  </Text>
                  <Text style={[styles.daysLeft, styles.dueTypo]}>Utility</Text>
                </View>
              </View>
              <View style={[styles.priceDueGrp, styles.priceFlexBox]}>
                <View style={[styles.group, styles.groupFlexBox]}>
                  <Text style={[styles.text2, styles.addLayout]}>₹ 666</Text>
                  <Text style={[styles.due01092023, styles.dueTypo]}>
                    Due: 08/12/2023
                  </Text>
                </View>
                <Image
                  style={styles.vuesaxlineararrowRightIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxlineararrowright.png")}
                />
              </View>
            </View>
            <View style={[styles.tnebBx, styles.payCtaFlexBox]}>
              <View style={styles.profileImgParent}>
                <View style={styles.profileImg}>
                  <View style={[styles.frameChild2, styles.frameChildLayout]} />
                  <Image
                    style={[styles.spotify1Icon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/airtel-2.png")}
                  />
                </View>
                <View style={styles.netflixParent}>
                  <Text style={[styles.amazonPrime, styles.text2Typo]}>
                    Airtel Xstream
                  </Text>
                  <Text style={[styles.daysLeft, styles.dueTypo]}>Utility</Text>
                </View>
              </View>
              <View style={styles.priceFlexBox}>
                <View style={[styles.group, styles.groupFlexBox]}>
                  <Text style={[styles.text2, styles.addLayout]}>₹ 499</Text>
                  <Text style={[styles.due01092023, styles.dueTypo]}>
                    Due: 23/02/2024
                  </Text>
                </View>
                <Image
                  style={styles.vuesaxlineararrowRightIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxlineararrowright.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.homePageInner, styles.homeLayout]}>
        <View style={[styles.homeMenuParent, styles.homeLayout]}>
          <View style={[styles.homeMenu, styles.menuPosition]}>
            <Image
              style={[styles.homeIcon, styles.homeIconLayout]}
              contentFit="cover"
              source={require("../assets/homeicon.png")}
            />
            <Text style={[styles.home, styles.addTypo]}>Home</Text>
          </View>
          <Pressable style={styles.addMenu} onPress={() => {}}>
            <View style={styles.addIcon}>
              <Image
                style={styles.profileImgChild}
                contentFit="cover"
                source={require("../assets/ellipse-19.png")}
              />
              <Image
                style={[styles.vuesaxlinearaddIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vuesaxlinearadd.png")}
              />
            </View>
            <Text style={[styles.add, styles.addTypo]}>Add</Text>
          </Pressable>
          <Pressable
            style={[styles.profileMenu, styles.menuPosition]}
            onPress={() => navigation.navigate("ProfilePage")}
          >
            <Image
              style={[styles.homeIcon, styles.homeIconLayout]}
              contentFit="cover"
              source={require("../assets/profileicon.png")}
            />
            <Text style={[styles.profile, styles.addTypo]}>Profile</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subscriptionFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  homeIconLayout: {
    width: 24,
    height: 24,
  },
  payTypo: {
    color: Color.color1,
    fontFamily: FontFamily.regular10,
    textAlign: "left",
  },
  groupFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  payCtaSpaceBlock: {
    paddingVertical: Padding.p_7xs,
    backgroundColor: Color.colorYellowgreen,
    borderRadius: Border.br_9xs,
  },
  payCtaFlexBox: {
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    alignItems: "center",
  },
  frameChildLayout: {
    height: 32,
    width: 32,
    borderRadius: Border.br_5xs,
    zIndex: 0,
  },
  iconLayout: {
    height: 28,
    width: 28,
    zIndex: 1,
    position: "absolute",
  },
  text2Typo: {
    height: 14,
    color: Color.fFFFFF,
    fontFamily: FontFamily.regular10,
    fontWeight: "500",
    textAlign: "left",
  },
  dueTypo: {
    marginTop: 6,
    height: 12,
    color: Color.style,
    fontFamily: FontFamily.regular10,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  iconPosition: {
    height: 26,
    width: 26,
    left: 3,
    top: 3,
    zIndex: 1,
    position: "absolute",
  },
  priceFlexBox: {
    marginLeft: 82,
    flexDirection: "row",
    alignItems: "center",
  },
  addLayout: {
    width: 30,
    display: "flex",
    alignItems: "center",
  },
  homeLayout: {
    height: 80,
    width: 375,
  },
  menuPosition: {
    top: 14,
    justifyContent: "flex-end",
    position: "absolute",
    alignItems: "center",
  },
  addTypo: {
    textAlign: "center",
    marginTop: 4,
    fontFamily: FontFamily.regular10,
  },
  profileImgChild: {
    width: 48,
    height: 48,
    zIndex: 0,
  },
  profileImgItem: {
    top: 4,
    left: 4,
    width: 40,
    zIndex: 1,
    height: 40,
    position: "absolute",
  },
  profileImg: {
    flexDirection: "row",
  },
  hello1: {
    color: Color.fFFFFF,
  },
  text: {
    color: "#94a2ab",
  },
  hello: {
    fontFamily: FontFamily.regular10,
    fontWeight: "500",
  },
  suresh: {
    color: Color.colorYellowgreen,
    fontWeight: "700",
    fontFamily: FontFamily.regular10,
  },
  helloSureshTxtContainer: {
    width: "100%",
  },
  helloSuresh: {
    width: 108,
    marginLeft: 12,
    textAlign: "left",
    fontSize: FontSize.bold16_size,
    height: 40,
    display: "flex",
  },
  profileImgParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vuesaxlinearnotification: {
    marginLeft: 135,
    height: 24,
  },
  helloNotification: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  total: {
    fontSize: FontSize.medium11_size,
    fontWeight: "500",
  },
  totalCta: {
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.colorYellowgreen,
    borderRadius: Border.br_9xs,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  pending: {
    color: Color.style,
    fontSize: FontSize.medium11_size,
    fontFamily: FontFamily.regular10,
    fontWeight: "500",
    textAlign: "left",
  },
  pendingCta: {
    borderStyle: "solid",
    borderColor: Color.colorYellowgreen,
    borderWidth: 1,
    marginLeft: 8,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  totalCtaParent: {
    flexDirection: "row",
  },
  text1: {
    fontWeight: "700",
    color: Color.fFFFFF,
    fontFamily: FontFamily.regular10,
    textAlign: "left",
    fontSize: FontSize.bold16_size,
  },
  totalExpectedSpend: {
    marginTop: 4,
    fontSize: FontSize.regular10_size,
    color: Color.style,
    fontFamily: FontFamily.regular10,
    textAlign: "left",
  },
  viewInsightsWrapper: {
    marginLeft: 117,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  frameGroup: {
    marginTop: 16,
    flexDirection: "row",
  },
  insightsBx: {
    padding: Padding.p_xs,
    marginTop: 24,
    justifyContent: "flex-end",
    backgroundColor: Color.color1,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    overflow: "hidden",
  },
  body1: {
    alignItems: "center",
  },
  paySubscription: {
    width: 160,
    height: 24,
    color: Color.fFFFFF,
    fontFamily: FontFamily.regular10,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.bold16_size,
  },
  frameChild: {
    backgroundColor: Color.colorLightpink_100,
  },
  netflixSymbolRgbIcon: {
    top: 2,
    left: 2,
    borderRadius: Border.br_5xs,
  },
  netflix: {
    width: 180,
    top: -2,
    fontSize: FontSize.regular12_size,
    display: "flex",
    alignItems: "center",
  },
  daysLeft: {
    fontSize: FontSize.regular12_size,
    width: 86,
  },
  netflixParent: {
    width: 86,
    marginLeft: 12,
    justifyContent: "center",
  },
  pay: {
    fontWeight: "700",
    fontSize: FontSize.bold16_size,
  },
  payCta: {
    width: 56,
    justifyContent: "space-between",
    marginLeft: 126,
    paddingVertical: Padding.p_7xs,
    backgroundColor: Color.colorYellowgreen,
    borderRadius: Border.br_9xs,
  },
  netflixBx: {
    height: 56,
    width: 336,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.color1,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
  },
  frameItem: {
    backgroundColor: "#b9f5cf",
  },
  spotify1Icon: {
    borderRadius: Border.br_5xs,
  },
  spotifyBx: {
    height: 56,
    width: 336,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.color1,
    borderRadius: Border.br_5xs,
    marginTop: 16,
    justifyContent: "center",
  },
  appsGrp: {
    marginTop: 12,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  paySubscriptionBx: {
    marginTop: 24,
    justifyContent: "flex-end",
  },
  activeSubscription: {
    width: 180,
    height: 24,
    color: Color.fFFFFF,
    fontFamily: FontFamily.regular10,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.bold16_size,
  },
  frameInner: {
    backgroundColor: Color.colorLightblue,
  },
  amazonPrime: {
    width: 120,
    fontSize: FontSize.regular12_size,
    display: "flex",
    alignItems: "center",
  },
  text2: {
    height: 14,
    color: Color.fFFFFF,
    fontFamily: FontFamily.regular10,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.medium11_size,
  },
  due01122023: {
    width: 96,
    fontSize: FontSize.regular10_size,
  },
  group: {
    width: 80,
  },
  vuesaxlineararrowRightIcon: {
    width: 12,
    height: 12,
    marginLeft: 8,
  },
  priceDueGrp: {
    justifyContent: "flex-end",
  },
  primeBx: {
    height: 56,
    width: 336,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.color1,
    borderRadius: Border.br_5xs,
  },
  rectangleView: {
    backgroundColor: Color.colorCornflowerblue,
  },
  due01092023: {
    width: 96,
    fontSize: FontSize.regular10_size,
  },
  tnebBx: {
    height: 56,
    width: 336,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.color1,
    borderRadius: Border.br_5xs,
    marginTop: 16,
  },
  frameChild1: {
    backgroundColor: Color.colorLightpink_200,
  },
  frameChild2: {
    backgroundColor: Color.colorSilver_100,
  },
  body2: {
    marginTop: 24,
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeIcon: {
    height: 24,
  },
  home: {
    fontSize: FontSize.regular12_size,
    color: Color.colorYellowgreen,
    fontWeight: "500",
  },
  homeMenu: {
    left: 57,
  },
  vuesaxlinearaddIcon: {
    top: 10,
    left: 10,
  },
  addIcon: {
    flexDirection: "row",
    justifyContent: "center",
  },
  add: {
    fontSize: FontSize.size_sm,
    height: 18,
    width: 30,
    display: "flex",
    alignItems: "center",
    color: Color.style,
    fontWeight: "700",
    justifyContent: "center",
  },
  addMenu: {
    top: -14,
    left: 163,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    fontSize: FontSize.regular12_size,
    color: Color.style,
    fontWeight: "500",
  },
  profileMenu: {
    left: 280,
  },
  homeMenuParent: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  homePageInner: {
    backgroundColor: Color.color,
    marginTop: 4,
  },
  homePage: {
    backgroundColor: Color.a1A1A,
    flex: 1,
    paddingTop: Padding.p_21xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default HomePage;
